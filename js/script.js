// Навигационное меню
// Навигационное меню
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Эффект изменения при скролле
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Слайдер фотографий
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Показываем первый слайд
showSlide(0);

// Автоматическая смена слайдов каждые 10 секунд
setInterval(nextSlide, 10000);

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Показываем первый слайд
showSlide(0);

// Автоматическая смена слайдов каждые 10 секунд
setInterval(nextSlide, 10000);
