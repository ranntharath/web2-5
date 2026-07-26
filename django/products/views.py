import json

from django.contrib import messages
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .forms import ProductForm
from .models import Product


def product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": str(product.price),
        "stock": product.stock,
    }


def read_json(request):
    try:
        return json.loads(request.body or "{}"), None
    except (json.JSONDecodeError, UnicodeDecodeError):
        return None, JsonResponse({"error": "Invalid JSON body."}, status=400)


def product_from_payload(product, payload):
    allowed_fields = {"name", "price", "stock"}
    unknown_fields = set(payload) - allowed_fields
    if unknown_fields:
        return None, {"fields": [f"Unknown field: {field}" for field in sorted(unknown_fields)]}

    for field in allowed_fields:
        if field in payload:
            setattr(product, field, payload[field])

    try:
        product.full_clean()
        product.save()
    except Exception as error:
        if hasattr(error, "message_dict"):
            return None, error.message_dict
        return None, {"fields": [str(error)]}
    return product, None


@csrf_exempt
@require_http_methods(["GET", "POST"])
def product_api_list(request):
    if request.method == "GET":
        products = [product_to_dict(product) for product in Product.objects.all()]
        return JsonResponse({"products": products})

    payload, error_response = read_json(request)
    if error_response:
        return error_response
    product, errors = product_from_payload(Product(), payload)
    if errors:
        return JsonResponse({"errors": errors}, status=400)
    return JsonResponse(product_to_dict(product), status=201)


@csrf_exempt
@require_http_methods(["GET", "PUT", "PATCH", "DELETE"])
def product_api_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)

    if request.method == "GET":
        return JsonResponse(product_to_dict(product))
    if request.method == "DELETE":
        product.delete()
        return JsonResponse({}, status=204)

    payload, error_response = read_json(request)
    if error_response:
        return error_response
    if request.method == "PUT":
        missing_fields = {"name", "price", "stock"} - set(payload)
        if missing_fields:
            return JsonResponse(
                {"errors": {"fields": [f"Missing field: {field}" for field in sorted(missing_fields)]}},
                status=400,
            )
    product, errors = product_from_payload(product, payload)
    if errors:
        return JsonResponse({"errors": errors}, status=400)
    return JsonResponse(product_to_dict(product))


def product_list(request):
    return render(request, "products/product_list.html", {"products": Product.objects.all()})


def product_create(request):
    form = ProductForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        form.save()
        messages.success(request, "Product created successfully.")
        return redirect("product_list")
    return render(request, "products/product_form.html", {"form": form, "title": "Add product"})


def product_update(request, pk):
    product = get_object_or_404(Product, pk=pk)
    form = ProductForm(request.POST or None, instance=product)
    if request.method == "POST" and form.is_valid():
        form.save()
        messages.success(request, "Product updated successfully.")
        return redirect("product_list")
    return render(
        request,
        "products/product_form.html",
        {"form": form, "title": "Edit product", "product": product},
    )


def product_delete(request, pk):
    product = get_object_or_404(Product, pk=pk)
    if request.method == "POST":
        product.delete()
        messages.success(request, "Product deleted successfully.")
        return redirect("product_list")
    return render(request, "products/product_confirm_delete.html", {"product": product})
