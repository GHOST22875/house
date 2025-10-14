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
    
    // Слайдер - исправленная версия
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Автоматическое переключение слайдов
    let slideInterval = setInterval(nextSlide, 5000);

    // Инициализация первого слайда
    showSlide(0);

    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (themeToggle && themeIcon) {
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
    }
    
    // Мобильное меню - исправленная версия
    if (mobileMenuToggle) {
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
    }
    
    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
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
    if (logo) {
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
    }

    // Фильтрация проектов (если есть на странице)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const cardCategories = card.getAttribute('data-category').split(' ');
                        if (cardCategories.includes(filterValue)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Добавляем класс active для текущей страницы в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});
