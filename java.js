document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments du DOM
    const menuToggle = document.querySelector(".small_menu");
    const menu = document.querySelector(".menu");
    
    // Gestion de l'affichage du menu mobile
    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        menu.classList.toggle("small");
    });
    
    // Sélection des liens du menu pour fermeture automatique sur mobile
    const menuLinks = document.querySelectorAll(".menu li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("small");
            menuToggle.classList.remove("active");
        });
    });
    
    // Effet de hover dynamique sur les boutons
    const buttons = document.querySelectorAll(".button-link a");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s ease-in-out";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
