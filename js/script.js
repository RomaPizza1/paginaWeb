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

//////codigo para el zoom de las imagenes
document.addEventListener('DOMContentLoaded', () => {
    const modalEl = document.getElementById('mediaModal'); // corregido
    const modal = new bootstrap.Modal(modalEl);
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
  
    document.querySelectorAll('.img-clickable').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        if (el.tagName === 'IMG') {
          modalVideo.style.display = 'none';
          modalVideo.src = '';
          modalImage.src = el.src;
          modalImage.style.display = 'block';
          modalImage.classList.remove('zoomed');
          modalImage.style.transform = '';
        } else if (el.tagName === 'VIDEO') {
          modalImage.style.display = 'none';
          modalImage.src = '';
          modalVideo.src = el.querySelector('source').src;
          modalVideo.style.display = 'block';
          modalVideo.play();
        }
        modal.show();
      });
    });
  
    // zoom solo para imágenes
    modalImage.addEventListener('click', e => {
      if (!modalImage.classList.contains('zoomed')) {
        const rect = modalImage.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        modalImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        modalImage.classList.add('zoomed');
      } else {
        modalImage.classList.remove('zoomed');
        modalImage.style.transform = '';
        modalImage.style.transformOrigin = 'center center';
      }
    });
  
    // arrastrar solo imágenes
    let isDragging = false, startX, startY;
    const handleDrag = e => {
      if (!isDragging) return;
      e.preventDefault();
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const currentTransform = modalImage.style.transform || '';
      modalImage.style.transform = `${currentTransform} translate(${dx}px, ${dy}px)`;
      startX = e.clientX;
      startY = e.clientY;
    };
  
    modalImage.addEventListener('mousedown', e => {
      if (!modalImage.classList.contains('zoomed')) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      modalImage.style.cursor = 'grabbing';
    });
  
    window.addEventListener('mouseup', () => {
      isDragging = false;
      if (modalImage.classList.contains('zoomed')) modalImage.style.cursor = 'move';
    });
  
    window.addEventListener('mousemove', handleDrag);
  
    modalImage.addEventListener('touchstart', e => {
      if (!modalImage.classList.contains('zoomed')) return;
      isDragging = true;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    });
  
    modalImage.addEventListener('touchmove', e => {
      if (!isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      const currentTransform = modalImage.style.transform || '';
      modalImage.style.transform = `${currentTransform} translate(${dx}px, ${dy}px)`;
      startX = touch.clientX;
      startY = touch.clientY;
    });
  
    modalImage.addEventListener('touchend', () => {
      isDragging = false;
    });
  
    modalEl.addEventListener('hidden.bs.modal', () => {
      modalImage.classList.remove('zoomed');
      modalImage.style.transform = '';
      modalImage.style.transformOrigin = 'center center';
      modalImage.src = '';
      modalVideo.pause();
      modalVideo.src = '';
    });
  });

//////// probando el link para los telefonos en mobile
function togglePhones() {
  var phones = document.getElementById("phoneOptions");
  if (phones.style.display === "none") {
     phones.style.display = "block";
  } else {
     phones.style.display = "none";
  }
}
  