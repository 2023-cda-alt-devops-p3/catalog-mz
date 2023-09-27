document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll('.nav a');

    burgerMenu.addEventListener("click", function() {
        if (window.innerWidth >= 1024) return;

        if (nav.style.display === "none" || nav.style.display === "") {
            nav.style.display = "block";
            burgerMenu.classList.add('cross'); 
        } else {
            nav.style.display = "none";
            burgerMenu.classList.remove('cross'); 
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth >= 768) return;

            nav.style.display = "none";
            burgerMenu.classList.remove('cross');
        });
    });
});


