const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    brand: "DELL",
    price: 209.99,
    discount: 10,
    stock: 50,
    rating: 4.7,
    description: "A comfortable wireless mouse with silent clicks and long battery life.",
    image: "https://www.lemokey.com/cdn/shop/files/Lemokey-G1-wireless-mouse-black.jpg?v=1721803330&width=1946",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    brand: "Keychron",
    price: 129.99,
    discount: 15,
    stock: 35,
    rating: 4.9,
    description: "RGB mechanical keyboard with hot-swappable switches and wireless connectivity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uTAMYTfsUlXXBCoI1Zn1VC3I1fOX6XIRYGxe8Ot2kHB-FtfWgG3cRCY&s=10",
  },
  {
    id: 3,
    name: "Gaming Headset",
    category: "Accessories",
    brand: "HyperX",
    price: 89.99,
    discount: 20,
    stock: 80,
    rating: 4.8,
    description: "Immersive surround sound gaming headset with noise-canceling microphone.",
    image: "https://cdn.thewirecutter.com/wp-content/media/2025/11/BEST-GAMING-HEADSETS-0049.jpg?width=2048&quality=60&crop=2048:1365&auto=webp",
  },
  {
    id: 4,
    name: "27-inch Monitor",
    category: "Monitors",
    brand: "Samsung",
    price: 299.99,
    discount: 12,
    stock: 20,
    rating: 4.6,
    description: "27-inch QHD IPS monitor with 75Hz refresh rate and ultra-thin bezels.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxqQzoBahHX3h8bRikpIqp0Nov5_XS4P9gtkg8TCkj2UBzEZPywez608f&s=10",
  },
];
const cardCont = document.getElementById("card-cont")

let card = products.map((product)=>{
  return `<div class="product-card">
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
})

console.log(card)

cardCont.innerHTML = card.join("")