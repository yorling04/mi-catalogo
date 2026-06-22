let slideIndex = 0;
let slideInterval;

const slides = document.querySelectorAll('.carousel-images img');

// Inicializa el carrusel automático
function startCarousel() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 4000); // Cambia cada 4000 milisegundos (4 segundos)
}

// Cambia de imagen (Función manual y automática)
function changeSlide(direction) {
    // Oculta la imagen actual
    slides[slideIndex].classList.remove('active');
    
    // Calcula el nuevo índice
    slideIndex += direction;
    
    // Si llega al final, vuelve al inicio
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    // Si va hacia atrás del inicio, va al final
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Muestra la nueva imagen
    slides[slideIndex].classList.add('active');
    
    // Reinicia el temporizador automático si el usuario hizo clic manual
    clearInterval(slideInterval);
    startCarousel();
}

// Arranca el proceso al cargar la página
startCarousel();