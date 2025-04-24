// function enviarPedido(e) {
//     e.preventDefault();
//     const pizza = document.getElementById("pizza").value;
//     const tamano = document.getElementById("tamano").value;
//     const direccion = document.getElementById("direccion").value;
//     const mensaje = `Hola, quiero pedir una pizza ${pizza}, tamaño ${tamano}. Entregar en: ${direccion}`;
//     const telefono = "14077125916"; // <-- tu número con código de país (sin +) no se a donde llega
//     const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
//     window.open(url, '_blank');
//   }
window.location.href = url;

function enviarPedido(e) {
e.preventDefault();
const pizza = document.getElementById("pizza").value;
const tamano = document.getElementById("tamano").value;
const direccion = document.getElementById("direccion").value;
const mensaje = `Hola, quiero pedir una pizza ${pizza}, tamaño ${tamano}. Entregar en: ${direccion}`;
const telefono = "14077125916";
const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
window.location.href = url; // redirige directo a WhatsApp
}

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


//codigo carrusel appetizers desktop
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselCards1"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});
//mobile carrusel appetizers
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("mobileCarousel1"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});

//codigo carrusel pastas desktop
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselCards2"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});
//mobile carrusel pastas
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("mobileCarousel2"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});

//codigo carrusel subs desktop
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselCards3"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});
//mobile carrusel subs
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("mobileCarousel3"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});

//codigo para el menu en mobile
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const contenido = document.querySelector("#navbarCollapse");

    toggleButton.addEventListener("click", function () {
        contenido.classList.toggle("d-none"); // Usa Bootstrap "d-none" para ocultar/mostrar
    });
});

//codigo carrusel pizzas desktop
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselCards4"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});
//mobile carrusel pizza
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("mobileCarousel4"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});

//codigo carrusel desserts desktop
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselCards6"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});
//mobile carrusel desserts
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("mobileCarousel6"), {
        interval: 10000, // Cambia la imagen cada 3 segundos (ajusta según necesites)
        ride: "carousel" // Hace que el carrusel comience automáticamente
    });

    // Opcional: Control manual con botones
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        myCarousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        myCarousel.next();
    });
});





