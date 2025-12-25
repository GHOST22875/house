// Данные выполненных работ
const worksData = {
    "Загородный дом в Подмосковье": {
        images: [
            'https://i.pinimg.com/1200x/7e/65/74/7e6574ed238db345e64f18b987d468dc.jpg',
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg',
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        category: "Дом",
        year: "2023",
        area: "180 м²",
        time: "5 месяцев",
        price: "от 2 700 000 ₽",
        description: "Полный цикл строительства каркасного дома с внутренней отделкой в современном стиле. Работа выполнена в соответствии с техническим заданием заказчика и с соблюдением всех строительных норм.",
        features: [
            'Заливка фундамента',
            'Возведение каркаса',
            'Утепление и пароизоляция',
            'Монтаж кровли',
            'Отделка фасада',
            'Установка окон и дверей',
            'Внутренняя отделка',
            'Монтаж инженерных систем'
        ],
        review: "Очень довольны работой компании EarthDom. Дом построили в срок, качество на высшем уровне. Все этапы строительства контролировали лично, всегда были на связи. Рекомендуем!",
        rating: "★★★★★"
    },
    "Отделка фасада в классическом стиле": {
        images: [
            './image/facade1/5256075123540822993.jpg',
            './image/facade1/5256075123540822992.jpg',
            './image/facade1/5256075123540822991.jpg'
        ],
        category: "Фасад",
        year: "2023",
        area: "120 м²",
        time: "3 недели",
        price: "от 680 000 ₽",
        description: "Комплексная отделка фасада частного дома в классическом стиле с использованием качественных материалов и современных технологий.",
        features: [
            'Подготовка поверхности',
            'Утепление фасада',
            'Монтаж обрешетки',
            'Установка вентилируемого фасада',
            'Отделка декоративными элементами',
            'Покраска',
            'Монтаж отливов и откосов'
        ],
        review: "Делал отделку фасада своего дома. Ребята работали профессионально, аккуратно, без грязи и мусора. Результат превзошел ожидания. Буду обращаться еще за террасой.",
        rating: "★★★★★"
    },
    "Террасное покрытие из ДПК": {
        images: [
            'https://i.pinimg.com/1200x/e8/64/93/e864930d8e572f041870293ba9e052c6.jpg',
            'https://i.pinimg.com/1200x/37/91/c6/3791c6816dc8afc4fa6e6c9e250e2305.jpg'
        ],
        category: "Терраса",
        year: "2023",
        area: "45 м²",
        time: "2 недели",
        price: "от 350 000 ₽",
        description: "Устройство террасы с навесом и освещением из древесно-полимерного композита (ДПК). Материал устойчив к погодным условиям и не требует особого ухода.",
        features: [
            'Подготовка основания',
            'Монтаж каркаса',
            'Укладка ДПК покрытия',
            'Установка ограждений',
            'Монтаж освещения',
            'Установка навеса',
            'Финальная обработка'
        ],
        review: "Отличная работа! Терраса получилась очень красивой и функциональной. Материал качественный, монтаж выполнен аккуратно. Очень доволен результатом.",
        rating: "★★★★★"
    },
    "Дачный дом для семьи": {
        images: [
            'https://i.pinimg.com/736x/02/2d/14/022d1470d1410718c857f77e86a99049.jpg'
        ],
        category: "Дом",
        year: "2022",
        area: "95 м²",
        time: "3 месяца",
        price: "от 1 425 000 ₽",
        description: "Строительство каркасного дома под ключ для круглогодичного проживания семьи из 4 человек.",
        features: [
            'Устройство свайного фундамента',
            'Сборка каркаса',
            'Утепление минеральной ватой',
            'Монтаж кровли',
            'Внешняя отделка',
            'Установка окон и дверей',
            'Внутренняя отделка',
            'Подключение коммуникаций'
        ],
        review: "Построили отличный дом для дачи. Качественно, быстро и по разумной цене. Спасибо команде EarthDom за профессионализм!",
        rating: "★★★★★"
    },
    "Внутренняя отделка коттеджа": {
        images: [
            'https://i.pinimg.com/1200x/9f/8d/9f/9f8d9fabbacb8e6145caf82c13e89f47.jpg'
        ],
        category: "Интерьер",
        year: "2023",
        area: "150 м²",
        time: "2 месяца",
        price: "от 1 200 000 ₽",
        description: "Черновая и чистовая отделка коттеджа в скандинавском стиле с использованием натуральных материалов.",
        features: [
            'Выравнивание стен и потолков',
            'Укладка электрики',
            'Монтаж сантехники',
            'Устройство стяжки пола',
            'Монтаж гипсокартона',
            'Укладка плитки',
            'Штукатурные работы',
            'Покраска и поклейка обоев',
            'Установка дверей и плинтусов'
        ],
        review: "Прекрасная работа! Интерьер получился именно таким, как мы хотели. Учли все наши пожелания, материалы качественные.",
        rating: "★★★★★"
    },
    "Благоустройство участка": {
        images: [
            'https://i.pinimg.com/736x/9b/70/39/9b7039f04b1fb1fe86f01627a8c8cb6d.jpg'
        ],
        category: "Ландшафт",
        year: "2022",
        area: "800 м²",
        time: "4 недели",
        price: "от 950 000 ₽",
        description: "Комплексное благоустройство загородного участка: планировка, озеленение, устройство дорожек и зон отдыха.",
        features: [
            'Планировка участка',
            'Устройство дренажной системы',
            'Укладка садовых дорожек',
            'Озеленение и посадка растений',
            'Устройство зоны отдыха',
            'Монтаж освещения',
            'Установка системы полива',
            'Строительство беседки'
        ],
        review: "Прекрасная работа по благоустройству участка. Учли все наши пожелания, предложили интересные решения. Единственное - немного затянули сроки из-за погоды.",
        rating: "★★★★☆"
    },
    "Современная отделка фасада": {
        images: [
            './image/facade2/5256075123540823007.jpg',
            './image/facade2/5256075123540822998.jpg',
            './image/facade2/5256075123540823009.jpg'
        ],
        category: "Фасад",
        year: "2022",
        area: "95 м²",
        time: "2.5 недели",
        price: "от 520 000 ₽",
        description: "Утепление и отделка фасада комбинированными материалами в современном стиле.",
        features: [
            'Демонтаж старой отделки',
            'Утепление пеноплексом',
            'Монтаж вентилируемого фасада',
            'Комбинированная отделка',
            'Установка декоративных элементов',
            'Герметизация швов',
            'Покраска'
        ],
        review: "Отличная работа! Фасад преобразился полностью. Качество материалов и работ на высоте. Соседи уже спрашивают контакты.",
        rating: "★★★★★"
    },
    "Дом с мансардой": {
        images: [
            'https://i.pinimg.com/1200x/00/8f/20/008f20405aaea27836e9b66e6bdd5809.jpg'
        ],
        category: "Дом",
        year: "2021",
        area: "140 м²",
        time: "4 месяца",
        price: "от 2 100 000 ₽",
        description: "Строительство дома с эксплуатируемой мансардой для большой семьи.",
        features: [
            'Ленточный фундамент',
            'Каркасное строительство',
            'Утепление мансарды',
            'Монтаж мансардных окон',
            'Отделка фасада',
            'Внутренняя планировка',
            'Устройство лестницы',
            'Отделка помещений'
        ],
        review: "Отличный дом! Мансарда получилась очень уютной и функциональной. Спасибо за качественную работу.",
        rating: "★★★★★"
    },
    "Терраса с барбекю зоной": {
        images: [
            'https://i.pinimg.com/1200x/37/91/c6/3791c6816dc8afc4fa6e6c9e250e2305.jpg'
        ],
        category: "Терраса",
        year: "2021",
        area: "60 м²",
        time: "3 недели",
        price: "от 480 000 ₽",
        description: "Строительство открытой террасы с летней кухней и барбекю зоной.",
        features: [
            'Заливка фундамента',
            'Монтаж каркаса',
            'Укладка террасной доски',
            'Строительство барбекю',
            'Монтаж рабочей зоны',
          'Установка освещения',
            'Монтаж водопровода'
        ],
        review: "Прекрасная терраса! Проводим на ней все летние вечера. Качество строительства отличное, все продумано до мелочей.",
        rating: "★★★★★"
    }
};

// Переменные для управления галереей
let currentWorkImageIndex = 0;
let currentWorkImages = [];

// Функция для открытия модального окна работы
function openWorkModal(workName) {
    console.log('Открываем модальное окно для работы:', workName);
    
    // Получаем данные работы
    const workData = worksData[workName];
    
    if (!workData) {
        console.error('Данные работы не найдены:', workName);
        return;
    }
    
    // Сохраняем текущие изображения работы
    currentWorkImages = workData.images;
    currentWorkImageIndex = 0;
    
    // Устанавливаем основное изображение
    const mainImage = document.getElementById('modalWorkImage');
    if (mainImage) {
        mainImage.src = currentWorkImages[currentWorkImageIndex];
        mainImage.alt = workName;
    }
    
    // Заполняем модальное окно данными
    const titleElement = document.getElementById('modalWorkTitle');
    if (titleElement) titleElement.textContent = workName;
    
    const categoryElement = document.getElementById('modalWorkCategory');
    if (categoryElement) categoryElement.textContent = workData.category;
    
    const yearElement = document.getElementById('modalWorkYear');
    if (yearElement) yearElement.textContent = workData.year;
    
    const areaElement = document.getElementById('modalWorkArea');
    if (areaElement) areaElement.textContent = workData.area;
    
    const timeElement = document.getElementById('modalWorkTime');
    if (timeElement) timeElement.textContent = workData.time;
    
    const priceElement = document.getElementById('modalWorkPrice');
    if (priceElement) priceElement.textContent = workData.price;
    
    // Добавляем описание
    const descriptionElement = document.getElementById('modalWorkDescription');
    if (descriptionElement) descriptionElement.textContent = workData.description;
    
    // Очищаем и добавляем выполненные работы
    const featuresList = document.getElementById('modalWorkFeatures');
    if (featuresList) {
        featuresList.innerHTML = '';
        
        workData.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
    
    // Добавляем отзыв клиента
    const reviewElement = document.getElementById('modalWorkReview');
    if (reviewElement) reviewElement.textContent = workData.review;
    
    const ratingElement = document.getElementById('modalWorkRating');
    if (ratingElement) ratingElement.textContent = workData.rating;
    
    // Создаем миниатюры
    const thumbnailsContainer = document.getElementById('modalWorkThumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        
        workData.images.forEach((imageUrl, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${workName} - фото ${index + 1}`;
            img.loading = 'lazy';
            
            thumbnail.appendChild(img);
            thumbnail.addEventListener('click', () => {
                changeWorkMainImage(index);
            });
            
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
    
    // Обновляем состояние кнопок навигации
    updateWorkNavigationButtons();
    
    // Показываем модальное окно
    const modal = document.getElementById('workModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Функция для смены основного изображения
function changeWorkMainImage(index) {
    if (index < 0 || index >= currentWorkImages.length) return;
    
    currentWorkImageIndex = index;
    const mainImage = document.getElementById('modalWorkImage');
    
    if (mainImage) {
        // Плавное исчезновение
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            mainImage.src = currentWorkImages[currentWorkImageIndex];
            mainImage.style.opacity = '1';
            
            // Обновляем активную миниатюру
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === currentWorkImageIndex);
            });
            
            // Обновляем состояние кнопок навигации
            updateWorkNavigationButtons();
        }, 200);
    }
}

// Функция для перехода к следующему изображению
function nextWorkImage() {
    if (currentWorkImageIndex < currentWorkImages.length - 1) {
        changeWorkMainImage(currentWorkImageIndex + 1);
    } else {
        changeWorkMainImage(0); // Циклическая навигация
    }
}

// Функция для перехода к предыдущему изображению
function prevWorkImage() {
    if (currentWorkImageIndex > 0) {
        changeWorkMainImage(currentWorkImageIndex - 1);
    } else {
        changeWorkMainImage(currentWorkImages.length - 1); // Циклическая навигация
    }
}

// Функция для обновления состояния кнопок навигации
function updateWorkNavigationButtons() {
    // Можно добавить логику для скрытия/показа кнопок если нужно
}

// Закрытие модального окна
function closeWorkModal() {
    const modal = document.getElementById('workModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Сбрасываем состояние галереи
    currentWorkImageIndex = 0;
    currentWorkImages = [];
}

// Инициализация после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализация обработчиков работ...');
    
    // Добавляем обработчики для кнопок "Смотреть кейс"
    const viewButtons = document.querySelectorAll('.work-view-btn');
    console.log('Найдено кнопок просмотра:', viewButtons.length);
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const workName = this.getAttribute('data-work');
            console.log('Клик по кнопке просмотра:', workName);
            
            openWorkModal(workName);
        });
    });
    
    // Закрытие модального окна при клике на крестик
    const closeBtn = document.querySelector('#workModal .modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeWorkModal);
    }
    
    // Закрытие модального окна при клике вне его области
    const modal = document.getElementById('workModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeWorkModal();
            }
        });
    }
    
    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('workModal');
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeWorkModal();
        }
        
        // Навигация по галерее с помощью клавиш
        if (modal && modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevWorkImage();
            } else if (e.key === 'ArrowRight') {
                nextWorkImage();
            }
        }
    });
    
    // Добавляем кнопки навигации для галереи
    const modalImage = document.querySelector('#workModal .modal-image');
    if (modalImage) {
        // Проверяем, не добавлены ли уже кнопки
        if (!modalImage.querySelector('.slide-arrow')) {
            const prevArrow = document.createElement('button');
            prevArrow.className = 'slide-arrow prev-arrow';
            prevArrow.innerHTML = '‹';
            prevArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                prevWorkImage();
            });
            
            const nextArrow = document.createElement('button');
            nextArrow.className = 'slide-arrow next-arrow';
            nextArrow.innerHTML = '›';
            nextArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                nextWorkImage();
            });
            
            modalImage.appendChild(prevArrow);
            modalImage.appendChild(nextArrow);
        }
    }
    
    // Фильтрация работ
    const filterButtons = document.querySelectorAll('.works-filter .filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            workCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.style.display = 'flex';
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
function preloadWorkImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Предзагрузка изображений при загрузке страницы
window.addEventListener('load', function() {
    Object.values(worksData).forEach(work => {
        preloadWorkImages(work.images);
    });
});
