document.addEventListener('DOMContentLoaded', function() {
    // Навигационное меню
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Слайдер
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Автоматическое переключение слайдов
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Остановка автоматического переключения при взаимодействии
    document.querySelectorAll('.slide-arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    // Переключение слайдов с клавиатуры
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }
    });
    
    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    // Проверяем сохраненную тему
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
    
    // Мобильное меню - исправленная версия
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Блокируем скролл тела при открытом меню
        if (navLinks.classList.contains('active')) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        
        // Анимация иконки бургер-меню
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });
    
    // Закрываем меню при клике вне его
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // Закрываем меню при изменении ориентации или размера
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // Логотип для мобильного меню
    logo.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        }
    });
    
    // Проверяем мобильное устройство для телеграм-ссылок
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    document.querySelectorAll('a[href*="SaveAsBot"]').forEach(link => {
        if (isMobile) {
            link.href = 'tg://resolve?domain=SaveAsBot';
        } else {
            link.href = 'https://t.me/SaveAsBot';
        }
    });
    
    // Инициализация первого слайда
    showSlide(0);
});
