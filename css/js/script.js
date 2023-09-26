document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const nav = document.querySelector(".nav");

    burgerMenu.addEventListener("click", function() {
        if (window.innerWidth >= 768) return;

        if (nav.style.display === "none") {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    });
});