// Данные проектов с несколькими изображениями
const projectsData = {
    "Дом 'Северный'": {
        images: [
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек. Дом построен с использованием энергоэффективных технологий и качественных материалов.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии',
            'Панорамные окна',
            'Система "умный дом"'
        ]
    },
    "Дом 'Лесной'": {
        images: [
            'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg',
            'https://i.pinimg.com/1200x/7e/65/74/7e6574ed238db345e64f18b987d468dc.jpg'
        ],
        area: '95 м²',
        time: '2.5 месяца',
        price: 'от 1 425 000 ₽',
        description: 'Уютный одноэтажный дом в скандинавском стиле. Отлично подходит для загородного отдыха. Проект отличается экологичностью и гармоничным сочетанием с природным ландшафтом.',
        features: [
            '2 спальни, 1 санузел',
            'Открытая планировка гостиной',
            'Большая терраса',
            'Экологичные материалы',
            'Теплый пол',
            'Естественное освещение',
            'Скандинавский дизайн',
            'Энергоэффективные окна'
        ]
    },
    "Дом 'Солнечный'": {
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/1200x/7e/65/74/7e6574ed238db345e64f18b987d468dc.jpg',
            'https://i.pinimg.com/1200x/00/8f/20/008f20405aaea27836e9b66e6bdd5809.jpg'
        ],
        area: '150 м²',
        time: '4 месяца',
        price: 'от 2 250 000 ₽',
        description: 'Современный дом с панорамным остеклением и открытой планировкой. Максимум света и простора. Архитектура проекта подчеркивает современные тенденции в загородном строительстве.',
        features: [
            '4 спальни, 2 санузла',
            'Студия гостиная-кухня',
            'Две террасы',
            'Система "умный дом"',
            'Солнечные батареи',
            'Бассейн',
            'Панорамное остекление',
            'Эко-материалы'
        ]
    },
    "Дом 'Уютный'": {
        images: [
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/1200x/37/91/c6/3791c6816dc8afc4fa6e6c9e250e2305.jpg',
            'https://i.pinimg.com/736x/9b/70/39/9b7039f04b1fb1fe86f01627a8c8cb6d.jpg'
        ],
        area: '80 м²',
        time: '2 месяца',
        price: 'от 1 200 000 ₽',
        description: 'Компактный и экономичный дом для молодой семьи или в качестве гостевого домика. Оптимальное соотношение цены и качества при сохранении комфорта и функциональности.',
        features: [
            '2 спальни, 1 санузел',
            'Компактная кухня',
            'Небольшая терраса',
            'Экономичное отопление',
            'Быстрое строительство',
            'Низкие эксплуатационные расходы',
            'Готовность под ключ',
            'Гарантия 10 лет'
        ]
    },
    "Дом 'Современный'": {
        images: [
            'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/736x/9b/70/39/9b7039f04b1fb1fe86f01627a8c8cb6d.jpg',
            'https://i.pinimg.com/1200x/00/8f/20/008f20405aaea27836e9b66e6bdd5809.jpg'
        ],
        area: '180 м²',
        time: '5 месяцев',
        price: 'от 2 700 000 ₽',
        description: 'Архитектурный проект премиум-класса с уникальным дизайном и высококачественной отделкой. Сочетание современных технологий и роскошных материалов.',
        features: [
            '5 спален, 3 санузла',
            'Кабинет, гардеробная',
            'Двухсветная гостиная',
            'Сауна, хаммам',
            'Система климат-контроля',
            'Дизайнерская отделка',
            'Премиум материалы',
            'Индивидуальный проект'
        ]
    },
    "Дом 'Классика'": {
        images: [
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://i.pinimg.com/1200x/00/8f/20/008f20405aaea27836e9b66e6bdd5809.jpg',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg'
        ],
        area: '140 м²',
        time: '3.5 месяца',
        price: 'от 2 100 000 ₽',
        description: 'Традиционный дом с современными технологиями. Классический внешний вид и комфорт внутри. Идеальное решение для тех, кто ценит проверенные временем решения.',
        features: [
            '3 спальни, 2 санузла',
            'Отдельная столовая',
            'Каминный зал',
            'Классический фасад',
            'Высокие потолки',
            'Качественные материалы',
            'Проверенные технологии',
            'Долговечность конструкции'
        ]
    },
    "Фасад 'Скандинавский стиль'": {
        images: [
            'https://i.pinimg.com/736x/5a/8d/3c/5a8d3c0b6d8c8d0f0b8e8c8a8e8c8a8e8.jpg',
            'https://i.pinimg.com/736x/9c/8a/8e/9c8a8e8c8a8e8c8a8e8c8a8e8c8a8e8c8.jpg',
            'https://i.pinimg.com/736x/7b/1a/9c/7b1a9c8e8c8a8e8c8a8e8c8a8e8c8a8e8.jpg'
        ],
        area: '85 м²',
        time: '3 недели',
        price: 'от 450 000 ₽',
        description: 'Современная отделка фасада в скандинавском стиле с использованием натуральных материалов и энергоэффективных решений. Минимализм, функциональность и естественность.',
        features: [
            'Натуральное дерево и камень',
            'Энергоэффективная изоляция',
            'Современные системы вентиляции',
            'Долговечные материалы',
            'Экологичные решения',
            'Гарантия 10 лет',
            'Скандинавский минимализм',
            'Устойчивость к погодным условиям'
        ]
    },
    "Фасад 'Классический'": {
        images: [
            'https://i.pinimg.com/736x/7b/1a/9c/7b1a9c8e8c8a8e8c8a8e8c8a8e8c8a8e8.jpg',
            'https://i.pinimg.com/1200x/00/8f/20/008f20405aaea27836e9b66e6bdd5809.jpg',
            'https://i.pinimg.com/736x/5a/8d/3c/5a8d3c0b6d8c8d0f0b8e8c8a8e8c8a8e8.jpg'
        ],
        area: '120 м²',
        time: '4 недели',
        price: 'от 680 000 ₽',
        description: 'Классическая отделка фасада с элементами традиционной архитектуры и современными технологиями. Вечная классика, адаптированная к современным требованиям.',
        features: [
            'Классические архитектурные элементы',
            'Качественные отделочные материалы',
            'Долговечное покрытие',
            'Традиционные цветовые решения',
            'Современные изоляционные материалы',
            'Гарантия 15 лет',
            'Роскошный внешний вид',
            'Проверенные технологии'
        ]
    },
    "Фасад 'Современный'": {
        images: [
            'https://i.pinimg.com/736x/9c/8a/8e/9c8a8e8c8a8e8c8a8e8c8a8e8c8a8e8c8.jpg',
            'https://i.pinimg.com/736x/5a/8d/3c/5a8d3c0b6d8c8d0f0b8e8c8a8e8c8a8e8.jpg',
            'https://i.pinimg.com/736x/7b/1a/9c/7b1a9c8e8c8a8e8c8a8e8c8a8e8c8a8e8.jpg'
        ],
        area: '95 м²',
        time: '2.5 недели',
        price: 'от 520 000 ₽',
        description: 'Современный подход к отделке фасада с использованием инновационных материалов и дизайнерских решений. Смелые формы, инновационные материалы и функциональность.',
        features: [
            'Инновационные материалы',
            'Современный дизайн',
            'Энергоэффективные решения',
            'Минималистичный подход',
            'Долговечность и практичность',
            'Гарантия 12 лет',
            'Современные технологии',
            'Индивидуальный дизайн'
        ]
    }
};

// Переменные для управления галереей
let currentImageIndex = 0;
let currentProjectImages = [];

// Функция для открытия модального окна проекта
function openProjectModal(projectCard) {
    // Получаем данные из карточки проекта
    const title = projectCard.querySelector('h3').textContent;
    const area = projectCard.querySelector('p:nth-child(2)').textContent;
    const time = projectCard.querySelector('p:nth-child(3)').textContent;
    const price = projectCard.querySelector('.project-price').textContent;
    
    // Получаем данные проекта
    const projectData = projectsData[title];
    
    if (!projectData) {
        console.error('Данные проекта не найдены:', title);
        return;
    }
    
    // Сохраняем текущие изображения проекта
    currentProjectImages = projectData.images;
    currentImageIndex = 0;
    
    // Устанавливаем основное изображение
    const mainImage = document.getElementById('modalProjectImage');
    mainImage.src = currentProjectImages[currentImageIndex];
    mainImage.alt = title;
    
    // Заполняем модальное окно данными
    document.getElementById('modalProjectTitle').textContent = title;
    document.getElementById('modalProjectArea').textContent = area.replace('Площадь: ', '').replace('Площадь фасада: ', '');
    document.getElementById('modalProjectTime').textContent = time.replace('Срок строительства: ', '').replace('Срок выполнения: ', '');
    document.getElementById('modalProjectPrice').textContent = price;
    
    // Добавляем описание
    document.getElementById('modalProjectDescription').textContent = projectData.description;
    
    // Очищаем и добавляем особенности
    const featuresList = document.getElementById('modalProjectFeatures');
    featuresList.innerHTML = '';
    
    projectData.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Создаем миниатюры
    const thumbnailsContainer = document.getElementById('modalProjectThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    projectData.images.forEach((imageUrl, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${title} - фото ${index + 1}`;
        img.loading = 'lazy';
        
        thumbnail.appendChild(img);
        thumbnail.addEventListener('click', () => {
            changeMainImage(index);
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Обновляем состояние кнопок навигации
    updateNavigationButtons();
    
    // Показываем модальное окно
    document.getElementById('projectModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция для смены основного изображения
function changeMainImage(index) {
    if (index < 0 || index >= currentProjectImages.length) return;
    
    currentImageIndex = index;
    const mainImage = document.getElementById('modalProjectImage');
    
    // Плавное исчезновение
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        mainImage.src = currentProjectImages[currentImageIndex];
        mainImage.style.opacity = '1';
        
        // Обновляем активную миниатюру
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currentImageIndex);
        });
        
        // Обновляем состояние кнопок навигации
        updateNavigationButtons();
    }, 200);
}

// Функция для перехода к следующему изображению
function nextImage() {
    if (currentImageIndex < currentProjectImages.length - 1) {
        changeMainImage(currentImageIndex + 1);
    } else {
        changeMainImage(0); // Циклическая навигация
    }
}

// Функция для перехода к предыдущему изображению
function prevImage() {
    if (currentImageIndex > 0) {
        changeMainImage(currentImageIndex - 1);
    } else {
        changeMainImage(currentProjectImages.length - 1); // Циклическая навигация
    }
}

// Функция для обновления состояния кнопок навигации
function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    
    if (prevBtn && nextBtn) {
        // Можно добавить логику для скрытия/показа кнопок если нужно
    }
}

// Закрытие модального окна
function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Сбрасываем состояние галереи
    currentImageIndex = 0;
    currentProjectImages = [];
}

// Обработчики событий после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализация обработчиков проектов...');
    
    // Добавляем обработчики клика на все карточки проектов
    const projectCards = document.querySelectorAll('.project-card');
    console.log('Найдено карточек проектов:', projectCards.length);
    
    projectCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        
        // Обработчик клика по всей карточке
        card.addEventListener('click', function(e) {
            // Игнорируем клики по кнопке
            if (!e.target.classList.contains('project-view-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Клик по карточке:', index);
                openProjectModal(this);
            }
        });
    });
    
    // Добавляем обработчики для кнопок "Смотреть фото"
    const viewButtons = document.querySelectorAll('.project-view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const projectName = this.getAttribute('data-project');
            console.log('Клик по кнопке просмотра:', projectName);
            
            // Находим родительскую карточку
            const projectCard = this.closest('.project-card');
            openProjectModal(projectCard);
        });
    });
    
    // Закрытие модального окна при клике на крестик
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    // Закрытие модального окна при клике вне его области
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProjectModal();
            }
        });
    }
    
    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('projectModal').style.display === 'block') {
            closeProjectModal();
        }
        
        // Навигация по галерее с помощью клавиш
        if (document.getElementById('projectModal').style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });
    
    // Добавляем кнопки навигации для галереи
    const modalImage = document.querySelector('.modal-image');
    if (modalImage) {
        const prevArrow = document.createElement('button');
        prevArrow.className = 'slide-arrow prev-arrow';
        prevArrow.innerHTML = '‹';
        prevArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            prevImage();
        });
        
        const nextArrow = document.createElement('button');
        nextArrow.className = 'slide-arrow next-arrow';
        nextArrow.innerHTML = '›';
        nextArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage();
        });
        
        modalImage.appendChild(prevArrow);
        modalImage.appendChild(nextArrow);
    }
    
    // Фильтрация проектов
    const filterButtons = document.querySelectorAll('.filter-btn');
    
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
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    const cardCategories = card.getAttribute('data-category').split(' ');
                    if (cardCategories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
});

// Функция для предзагрузки изображений
function preloadImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Предзагрузка изображений при загрузке страницы
window.addEventListener('load', function() {
    Object.values(projectsData).forEach(project => {
        preloadImages(project.images);
    });
});
