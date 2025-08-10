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

// Функционал смены темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

// Проверяем сохраненную тему в localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.textContent = '🌕';
} else {
    themeIcon.textContent = '🌑';
}

// Обработчик клика по кнопке
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '🌕';
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌑';
    }
});

// Остальной существующий код (меню и слайдер) остается без изменений
// ... (ваш предыдущий код)
