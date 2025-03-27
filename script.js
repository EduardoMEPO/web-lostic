document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Cambia color del header al hacer scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("shrink"); // Agrega la clase que hace el header más pequeño
        } else {
            header.classList.remove("shrink"); // Vuelve al tamaño normal
        }
    });

    // Función para abrir/cerrar el menú hamburguesa
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active"); // Activa o desactiva el menú
    });

    // Cerrar menú cuando se hace clic en un enlace
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active"); // Oculta el menú después de hacer clic
        });
    });
});