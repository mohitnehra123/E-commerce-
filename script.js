const cart_I = document.getElementById("count");
const cart_btn = document.querySelector(".cart-btn")
let count = 0;

function addToCart(){
  count++;
  cart_I.textContent = `${count}`
}