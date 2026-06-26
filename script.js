// ===============================
// ShopEasy E-Commerce JavaScript
// ===============================

// Cart Array
let cart = [];

// Add to Cart
function addToCart(name, price) {

    let item = cart.find(product => product.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    updateCart();
}

// Update Cart
function updateCart() {

    let cartItems = document.getElementById("cartItems");
    let total = document.getElementById("total");
    let count = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let grandTotal = 0;
    let totalItems = 0;

    cart.forEach(item => {

        grandTotal += item.price * item.qty;
        totalItems += item.qty;

        cartItems.innerHTML += `

        <div class="cart-row">

            <h4>${item.name}</h4>

            <p>₹${item.price}</p>

            <p>Qty : ${item.qty}</p>

            <button onclick="increase('${item.name}')">+</button>

            <button onclick="decrease('${item.name}')">-</button>

            <button onclick="removeItem('${item.name}')">
            Delete
            </button>

        </div>

        `;

    });

    total.innerHTML = grandTotal;
    count.innerHTML = totalItems;

    if(cart.length==0){

        cartItems.innerHTML="Your cart is empty.";

    }

}

// Increase Quantity

function increase(name){

    cart.forEach(item=>{

        if(item.name===name){

            item.qty++;

        }

    });

    updateCart();

}

// Decrease Quantity

function decrease(name){

    cart.forEach(item=>{

        if(item.name===name){

            item.qty--;

        }

    });

    cart = cart.filter(item=>item.qty>0);

    updateCart();

}

// Remove Item

function removeItem(name){

    cart = cart.filter(item=>item.name!==name);

    updateCart();

}

// Wishlist

function toggleWish(btn){

    if(btn.innerHTML=="♡"){

        btn.innerHTML="❤️";

    }

    else{

        btn.innerHTML="♡";

    }

}

// Checkout

function checkout(){

    if(cart.length==0){

        alert("Your Cart is Empty!");

        return;

    }

    alert("🎉 Order Placed Successfully!");

    cart=[];

    updateCart();

}

// Search

let search=document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

let value=search.value.toLowerCase();

let products=document.querySelectorAll(".product");

products.forEach(function(product){

let text=product.innerText.toLowerCase();

if(text.indexOf(value)>-1){

product.style.display="block";

}

else{

product.style.display="none";

}

});

});

}

// Dark Mode

let dark=document.getElementById("darkMode");

if(dark){

dark.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

dark.innerHTML="☀";

}

else{

dark.innerHTML="🌙";

}

}

}

// Welcome Alert

window.onload=function(){

console.log("ShopEasy Loaded Successfully");

}

// Scroll to Top Button

let topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.right="20px";
topButton.style.padding="10px 15px";
topButton.style.background="#0d6efd";
topButton.style.color="white";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.cursor="pointer";
topButton.style.display="none";

document.body.appendChild(topButton);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

}

topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}