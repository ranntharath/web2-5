import json
from decimal import Decimal

from django.test import TestCase
from django.urls import reverse

from .models import Product


class ProductCrudTests(TestCase):
    def setUp(self):
        self.product = Product.objects.create(name="Keyboard", price="49.99", stock=5)

    def test_list_displays_product(self):
        response = self.client.get(reverse("product_list"))
        self.assertContains(response, "Keyboard")

    def test_create_product(self):
        self.client.post(
            reverse("product_create"),
            {"name": "Mouse", "price": "20.50", "stock": 10},
        )
        self.assertTrue(Product.objects.filter(name="Mouse").exists())

    def test_update_product(self):
        self.client.post(
            reverse("product_update", args=[self.product.pk]),
            {"name": "Mechanical Keyboard", "price": "59.99", "stock": 4},
        )
        self.product.refresh_from_db()
        self.assertEqual(self.product.price, Decimal("59.99"))

    def test_delete_product(self):
        self.client.post(reverse("product_delete", args=[self.product.pk]))
        self.assertFalse(Product.objects.filter(pk=self.product.pk).exists())

    def test_negative_values_are_rejected(self):
        response = self.client.post(
            reverse("product_create"),
            {"name": "Invalid", "price": "-1", "stock": -1},
        )
        self.assertEqual(response.status_code, 200)
        self.assertFalse(Product.objects.filter(name="Invalid").exists())


class ProductApiTests(TestCase):
    def setUp(self):
        self.product = Product.objects.create(name="Keyboard", price="49.99", stock=5)

    def test_list_and_retrieve(self):
        response = self.client.get(reverse("product_api_list"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["products"][0]["name"], "Keyboard")

        response = self.client.get(reverse("product_api_detail", args=[self.product.pk]))
        self.assertEqual(response.json()["id"], self.product.pk)

    def test_create(self):
        response = self.client.post(
            reverse("product_api_list"),
            data=json.dumps({"name": "Mouse", "price": "20.50", "stock": 10}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 201)
        self.assertTrue(Product.objects.filter(name="Mouse").exists())

    def test_update_and_partial_update(self):
        url = reverse("product_api_detail", args=[self.product.pk])
        response = self.client.put(
            url,
            data=json.dumps({"name": "Updated", "price": "60.00", "stock": 4}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        response = self.client.patch(
            url,
            data=json.dumps({"stock": 12}),
            content_type="application/json",
        )
        self.assertEqual(response.json()["stock"], 12)

    def test_delete(self):
        response = self.client.delete(reverse("product_api_detail", args=[self.product.pk]))
        self.assertEqual(response.status_code, 204)
        self.assertFalse(Product.objects.filter(pk=self.product.pk).exists())

    def test_invalid_payload(self):
        response = self.client.post(
            reverse("product_api_list"),
            data=json.dumps({"name": "", "price": -1, "stock": -2}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 400)
