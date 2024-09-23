const cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  const cartItemsContainer = document.querySelector(".product-cart-list");
  const cartTotal = document.querySelector(".cart-list-subtotal b");
  const totalItemsElement = document.getElementById("total-items");

  cartItemsContainer.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = getCartItemHtml(item, index);
    cartItemsContainer.appendChild(itemElement);
    total += parseFloat(item.price) * item.quantity*1000;
    totalItems += item.quantity;
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
  totalItemsElement.textContent = totalItems;

  // Update subtotal in the right sidebar
  const subtotalElement = document.querySelector(".cart-subtotal b");
  if (subtotalElement) {
    subtotalElement.textContent = `$${total.toFixed(2)}`;
  }
}

function getCartItemHtml(item, index) {
  const itemTotal = parseFloat(item.price) * item.quantity*1;
  return `
    <img src="${item.image}" alt="${item.title}">
    <div>
      <div class="product-cart-titleprice">
        <p>${item.title}</p>
        <p><b>$${itemTotal}</b></p>
      </div>
      <p class="product-cart-stock">In Stock</p>
      <p class="product-cart-delivery">FREE delivery <b>Mon, Jan 29</b> available at checkout</p>
      <p class="product-cart-returns">FREE Returns &#11191;</p>
      <div class="product-cart-quantity">
        <select class="quantity-select" data-index="${index}">
          ${getQuantityOptions(item.quantity)}
        </select>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
    </div>
  `;
}

function getQuantityOptions(selectedQuantity) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map(
      (num) =>
        `<option value="${num}" ${
          num === selectedQuantity ? "selected" : ""
        }>${num}</option>`
    )
    .join("");
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCartAndUpdate();
}

function updateQuantity(index, newQuantity) {
  cart[index].quantity = parseInt(newQuantity);
  saveCartAndUpdate();
}

function saveCartAndUpdate() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity*1000, 0);
  const cartCountElement = document.querySelector(".nav-cart span");
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

displayCart();

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const index = parseInt(e.target.dataset.index);
    removeItem(index);
  }
});

document.addEventListener("change", function (e) {
  if (e.target.classList.contains("quantity-select")) {
    const index = parseInt(e.target.dataset.index);
    const newQuantity = parseInt(e.target.value);
    updateQuantity(index, newQuantity);
  }
});

updateCartCount();
