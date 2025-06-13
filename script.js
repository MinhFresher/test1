document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".order").forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "/ProductDetail.html"; 
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".order-now").forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "/Cart.html"; 
        });
    });
});
