let Data = new URLSearchParams(window.location.search);

window.addEventListener('load', () => {
    let dataobj = {
        image: Data.get('image'),
        title: Data.get('title'),
        price: Data.get('price'),
        oldprice: Data.get('old_price'),
        id: Data.get("id"),
        rating: Data.get("rating")
    }
    console.log(dataobj)
    document.getElementById("image").src = dataobj.image;
    document.getElementById("rating").innerHTML = dataobj.rating;
    document.getElementById("product-title").innerHTML = dataobj.title;
    document.getElementById("price").innerHTML = dataobj.price;
    document.getElementById("pk").innerHTML = dataobj.price;
    document.getElementById("old").innerHTML = dataobj.oldprice;


    updateCartCount();
})

let addcart = document.getElementById("addcart");
addcart.addEventListener("click", () => {
    addToCart();
});

function addToCart() {
    let dataobj = {
        image: Data.get('image'),
        title: Data.get('title'),
        price: Data.get('price'),
        id: Data.get("id"),
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.id === dataobj.id);

    if (existingItem) {
        parseInt(existingItem.quantity) += 1;
    } else {
        cart.push(dataobj);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Item added to cart!');
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
    let cartCountElement = document.querySelector('.nav-cart span');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

document.querySelector('.nav-cart').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'cart.html';
});