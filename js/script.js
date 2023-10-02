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


document.addEventListener("DOMContentLoaded", function() {
    const contentImages = document.querySelectorAll('.content img');

    contentImages.forEach(img => {
        img.addEventListener('click', function() {
            if (this.classList.contains('zoomed')) {
                this.classList.remove('zoomed');
            } else {

                contentImages.forEach(i => i.classList.remove('zoomed'));
 
                this.classList.add('zoomed');
            }
        });
    });

    // Supprimer le zoom en cliquant en dehors de l'image
    document.addEventListener('click', function(event) {
        if (event.target.tagName !== 'IMG') {
            contentImages.forEach(i => i.classList.remove('zoomed'));
        }
    });
});


