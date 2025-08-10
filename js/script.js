// Скрытие меню при прокрутке вниз
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
        // Прокрутка вниз
        navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
        // Прокрутка вверх
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
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
