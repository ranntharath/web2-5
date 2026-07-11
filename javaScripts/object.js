

console.log(products);

const card = document.getElementById("card")

card.innerHTML =  `<div class="product-card">
      <img
        src='${product.image}'
        alt="Wireless Mouse"
        class="product-image"
      />
      <div class="product-content">
        <span class="category">${product.category}</span>
        <h2>${product.name}</h2>
        <p class="brand">${product.brand}</p>
        <p class="description">
          ${product.description}
        </p>
        <div class="price-section">
          <span class="price">$${product.price.toFixed(2)}</span>
          <span class="discount">${product.discount}% OFF</span>
        </div>
        <div class="bottom">
          <span class="stock">Stock: ${product.stock}</span>
          <span class="rating">⭐ ${product.rating}</span>
        </div>

        <button>Add to Cart</button>
      </div>
</div>`


