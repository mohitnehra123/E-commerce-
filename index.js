$(document).ready(function () {
$("a").on("click", function (event) {
if (this.hash !== "") {
event.preventDefault();
var hash = this.hash;
$("html, body").animate(
{
scrollTop: $(hash).offset().top,
},
800,
function () {
window.location.hash = hash;
}
);
}
});
});
$(".menu-items a").click(function () {
$("#checkbox").prop("checked", false);
});

function myFunction() {
var txt;
if (confirm("Confirm to add to cart!")) {
txt = "OK! Your product added to cart";
} else {
txt = "You Canceled the to add to cart";
}
}


/* This is to add an item to the cart */
