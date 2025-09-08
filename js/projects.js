// Данные проектов
const projectsData = {
    "Дом 'Северный'": {
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        area: '120 м²',
        time: '3 месяца',
        price: 'от 1 800 000 ₽',
        description: 'Просторный двухэтажный дом в современном стиле с панорамными окнами. Идеальное решение для семьи из 4-5 человек.',
        features: [
            '3 спальни, 2 санузла',
            'Просторная гостиная с камином',
            'Кухня-столовая',
            'Терраса с выходом в сад',
            'Гараж на 2 автомобиля',
            'Энергоэффективные технологии'
        ]
    },
    "Дом 'Лесной'": {
        image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        area: '95 м²',
        time: '2.5 месяца',
        price: 'от 1 425 000 ₽',
        description: 'Уютный одноэтажный дом в скандинавском стиле. Отлично подходит для загородного отдыха.',
        features: [
            '2 спальни, 1 санузел',
            'Открытая планировка гостиной',
            'Большая терраса',
            'Экологичные материалы',
            'Теплый пол',
            'Естественное освещение'
        ]
    },
    "Дом 'Солнечный'": {
        image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        area: '150 м²',
        time: '4 месяца',
        price: 'от 2 250 000 ₽',
        description: 'Современный дом с панорамным остеклением и открытой планировкой. Максимум света и простора.',
        features: [
            '4 спальни, 2 санузла',
            'Студия гостиная-кухня',
            'Две террасы',
            'Система "умный дом"',
            'Солнечные батареи',
            'Бассейн'
        ]
    },
    "Дом 'Уютный'": {
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        area: '80 м²',
        time: '2 месяца',
        price: 'от 1 200 000 ₽',
        description: 'Компактный и экономичный дом для молодой семьи или в качестве гостевого домика.',
        features: [
            '2 спальни, 1 санузел',
            'Компактная кухня',
            'Небольшая терраса',
            'Экономичное отопление',
            'Быстрое строительство',
            'Низкие эксплуатационные расходы'
        ]
    },
    "Дом 'Современный'": {
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        area: '180 м²',
        time: '5 месяцев',
        price: 'от 2 700 000 ₽',
        description: 'Архитектурный проект премиум-класса с уникальным дизайном и высококачественной отделкой.',
        features: [
            '5 спален, 3 санузла',
            'Кабинет, гардеробная',
            'Двухсветная гостиная',
            'Сауна, хаммам',
            'Система климат-контроля',
            'Дизайнерская отделка'
        ]
    },
    "Дом 'Классика'": {
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        area: '140 м²',
        time: '3.5 месяца',
        price: 'от 2 100 000 ₽',
        description: 'Традиционный дом с современными технологиями. Классический внешний вид и комфорт внутри.',
        features: [
            '3 спальни, 2 санузла',
            'Отдельная столовая',
            'Каминный зал',
            'Классический фасад',
            'Высокие потолки',
            'Качественные материалы'
        ]
    }
};

// Функция открытия модального окна
function openProjectModal(projectTitle) {
    const project = projectsData[projectTitle];
    if (!project) return;

    // Заполняем модальное окно данными
    document.getElementById('modalProjectImage').src = project.image;
    document.getElementById('modalProjectTitle').textContent = projectTitle;
    document.getElementById('modalProjectArea').textContent = project.area;
    document.getElementById('modalProjectTime').textContent = project.time;
    document.getElementById('modalProjectPrice').textContent = project.price;
    document.getElementById('modalProjectDescription').textContent = project.description;
    
    // Заполняем особенности
    const featuresList = document.getElementById('modalProjectFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Показываем модальное окно
    document.getElementById('projectModal').style.display = 'block';
    document.body.classList.add('modal-open');
}

// Функция закрытия модального окна
function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Обработчики событий для модального окна
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Закрытие по клику на крестик
    closeBtn.addEventListener('click', closeProjectModal);
    
    // Закрытие по клику вне модального окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
    
    // Добавляем обработчики клика на карточки проектов
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('h3').textContent;
            openProjectModal(projectTitle);
        });
    });
});

// Фильтрация проектов
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
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
});
