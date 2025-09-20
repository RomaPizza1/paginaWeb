//codigo de animacion para titulos
document.addEventListener("DOMContentLoaded", function () {
const observer = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("animacion-activa");
        } else {
        entry.target.classList.remove("animacion-activa");
        }
    });
    },
    {
    threshold: 0.5 // 50% del elemento debe estar visible
    }
);

const elementos = document.querySelectorAll(".animacion-menu");
elementos.forEach(el => observer.observe(el));
});


//codigo para el menu en mobile
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const contenido = document.querySelector("#navbarCollapse");

    toggleButton.addEventListener("click", function () {
        contenido.classList.toggle("d-none"); // Usa Bootstrap "d-none" para ocultar/mostrar
    });
});






