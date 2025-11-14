const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart");

document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

if (cart.length === 0) {
  container.innerHTML = "<p>Your cart is empty.</p>";
} else {
  let total = 0;

  cart.forEach(product => {
    const subtotal = product.price * product.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Quantity: ${product.quantity}</p>
      <p>Subtotal: $${subtotal.toFixed(2)}</p>
    `;
    container.appendChild(div);
  });

  const totalSection = document.createElement("div");
  totalSection.className = "total-section";

  let summaryHTML = `
    <h2>Summary</h2>
    <div class="summary-items">
  `;

  cart.forEach(product => {
    const subtotal = product.price * product.quantity;
    summaryHTML += `
      <div class="summary-row">
        <span>${product.name} (${product.quantity} × $${product.price.toFixed(2)})</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
    `;
  });

  summaryHTML += `
    </div><hr>
    <div class="summary-total">
      <strong>Total:</strong> <span>$${total.toFixed(2)}</span>
    </div>
  `;

  totalSection.innerHTML = summaryHTML;
  container.after(totalSection);
}


function submitPayment(event) {
  event.preventDefault(); 

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const fullName = document.getElementById("fullName").value.trim();
  const address = document.getElementById("address").value.trim();
  const creditCard = document.getElementById("creditCard").value.trim();

  
  if (!fullName || !address || !creditCard) {
    alert("Please fill in all the payment details.");
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(fullName) || !/[a-zA-Z]/.test(fullName)) {
    alert("Full Name must contain letters only");
    return;
  }

  if (!/^\d{13,16}$/.test(creditCard)) {
    alert("Please enter a valid credit card number (13 to 16 digits).");
    return;
  }

  localStorage.removeItem("cart");
  window.location.href = "success.html";
}
