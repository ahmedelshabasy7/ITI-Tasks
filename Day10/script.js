const xhr = new XMLHttpRequest();
xhr.open("GET", "products.json");

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);
    const container = document.getElementById("products");

    (products || []).forEach((product, index) => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <input type="number" id="qty-${index}" value="1" min="1" style="width: 60px; margin-bottom: 10px;">
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      container.appendChild(div);
    });

    window.productsList = products;
  }
};

xhr.send();

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

function addToCart(index) {
  const product = window.productsList[index];
  const qtyInput = document.getElementById(`qty-${index}`);
  const quantity = parseInt(qtyInput.value) || 1;

  if(quantity < 1){
    alert("You have to add at least one element.");
    qtyInput.value = "1";
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((p) => p.name === product.name);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${quantity} of ${product.name} added to cart!`);
}
