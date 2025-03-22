document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Cambia color del header al hacer scroll
    window.addEventListener("scroll", function () { // Escucha cuando el usuario haga scroll
        if (window.scrollY > 50) { // Si el scroll es mayor a 50px, cambia el color del header
            header.style.backgroundColor = "#000"; // Cambia a negro cuando haces scroll (hace el header más oscuro al bajar)
        } else {
            header.style.backgroundColor = "#222"; // Vuelve a su color original arriba
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