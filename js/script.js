// Навигационное меню
const navbar = document.getElementById('navbar');
let lastScroll = 0;
let isScrolled = false;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Эффект изменения при скролле
    if (currentScroll > 100 && !isScrolled) {
        navbar.classList.add('scrolled');
        isScrolled = true;
    } else if (currentScroll <= 100 && isScrolled) {
        navbar.classList.remove('scrolled');
        isScrolled = false;
    }
    
    // Скрытие/показ меню при скролле
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
