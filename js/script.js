// Добавляем обработчик для мобильного меню
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Анимация иконки бургер-меню
    if (mobileMenuToggle.classList.contains('active')) {
        mobileMenuToggle.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
        mobileMenuToggle.querySelector('span:nth-child(2)').style.opacity = '0';
        mobileMenuToggle.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        mobileMenuToggle.querySelector('span:nth-child(1)').style.transform = '';
        mobileMenuToggle.querySelector('span:nth-child(2)').style.opacity = '';
        mobileMenuToggle.querySelector('span:nth-child(3)').style.transform = '';
    }
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.querySelector('span:nth-child(1)').style.transform = '';
        mobileMenuToggle.querySelector('span:nth-child(2)').style.opacity = '';
        mobileMenuToggle.querySelector('span:nth-child(3)').style.transform = '';
    });
});

// Остальной JavaScript код остается без изменений
// Навигационное меню
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

showSlide(0);

let slideInterval = setInterval(nextSlide, 10000);

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.textContent = '🌕';
} else {
    themeIcon.textContent = '🌑';
}

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
