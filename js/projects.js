// Данные проектов
const projectsData = {
    "severny": {
        title: "Дом 'Северный'",
        area: "120 м²",
        duration: "3 месяца",
        price: "от 2 100 000 ₽",
        floors: "2 этажа",
        technology: "Каркасная технология",
        description: "Проект 'Северный' сочетает в себе современный дизайн и функциональность. Идеально подходит для семейного проживания в условиях холодного климата. Просторная гостиная с камином создает уютную атмосферу, а большие окна наполняют дом естественным светом.",
        features: [
            "Усиленное утепление для северных регионов",
            "Панорамные окна с тройным стеклопакетом",
            "Каминная зона в гостиной",
            "Проект предусматривает систему 'умный дом'",
            "Отдельная котельная с современным оборудованием"
        ],
        images: [
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    },
    "lesnoy": {
        title: "Дом 'Лесной'",
        area: "95 м²",
        duration: "2.5 месяца",
        price: "от 1 700 000 ₽",
        floors: "1.5 этажа",
        technology: "Каркасно-щитовая технология",
        description: "Уютный дом для тех, кто ценит близость к природе. Компактный, но продуманный до мелочей проект идеально вписывается в лесной ландшафт. Натуральные материалы и большие окна создают ощущение единения с природой.",
        features: [
            "Терраса с выходом из гостиной",
            "Отделка натуральными материалами",
            "Энергоэффективные решения",
            "Компактная планировка без потери комфорта",
            "Второй свет в гостиной"
        ],
        images: [
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    },
    "solnechny": {
        title: "Дом 'Солнечный'",
        area: "150 м²",
        duration: "4 месяца",
        price: "от 2 600 000 ₽",
        floors: "2 этажа",
        technology: "Каркасная технология с СИП-панелями",
        description: "Светлый и просторный дом с панорамным остеклением. Проект разработан для максимального использования естественного освещения. Современный дизайн и эргономичная планировка делают этот дом идеальным для большой семьи.",
        features: [
            "Панорамное остекление южного фасада",
            "Солнечные батареи для автономного энергоснабжения",
            "Система рекуперации воздуха",
            "Проект предусматривает бассейн",
            "Отдельная мастерская на цокольном этаже"
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    },
    "uyutny": {
        title: "Дом 'Уютный'",
        area: "80 м²",
        duration: "2 месяца",
        price: "от 1 400 000 ₽",
        floors: "1 этаж",
        technology: "Каркасная технология",
        description: "Компактный и экономичный дом для небольшой семьи или дачного отдыха. Несмотря на скромные размеры, проект включает все необходимое для комфортного проживания. Идеальное решение для первого собственного дома.",
        features: [
            "Экономичный вариант без потери качества",
            "Простая и функциональная планировка",
            "Возможность дальнейшей пристройки",
            "Энергоэффективные решения",
            "Быстрый срок строительства"
        ],
        images: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    },
    "sovremenny": {
        title: "Дом 'Современный'",
        area: "180 м²",
        duration: "5 месяцев",
        price: "от 3 200 000 ₽",
        floors: "2 этажа + мансарда",
        technology: "Комбинированная каркасная технология",
        description: "Архитектурный проект в стиле хай-тек с четкими линиями и современными материалами. Просторные помещения с открытой планировкой и минималистичным дизайном. Идеален для тех, кто ценит современный стиль и технологичные решения.",
        features: [
            "Плоская зеленая кровля",
            "Панорамное остекление",
            "Умный дом премиум-класса",
            "Система климат-контроля",
            "Экологичные материалы отделки"
        ],
        images: [
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    },
    "klassika": {
        title: "Дом 'Классика'",
        area: "140 м²",
        duration: "3.5 месяца",
        price: "от 2 400 000 ₽",
        floors: "2 этажа",
        technology: "Каркасная технология",
        description: "Классический загородный дом с традиционной архитектурой и современным наполнением. Симметричный фасад, двускатная кровля и уютная терраса создают образ идеального семейного гнезда. Внутри - современная планировка с учетом потребностей семьи.",
        features: [
            "Классический фасад с современными материалами",
            "Терраса с выходом из кухни-гостиной",
            "Кабинет на втором этаже",
            "Гардеробная в главной спальне",
            "Котельная с современным оборудованием"
        ],
        images: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ]
    }
};

// Функция для открытия модального окна с данными проекта
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    // Заполняем данные проекта
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-area').textContent = project.area;
    document.getElementById('modal-duration').textContent = project.duration;
    document.getElementById('modal-price').textContent = project.price;
    document.getElementById('modal-floors').textContent = project.floors;
    document.getElementById('modal-technology').textContent = project.technology;
    document.getElementById('modal-description').textContent = project.description;
    
    // Заполняем особенности
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Заполняем галерею изображений
    const mainImage = document.getElementById('modal-main-img');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    
    if (project.images && project.images.length > 0) {
        mainImage.src = project.images[0];
        mainImage.alt = project.title;
        
        thumbnailsContainer.innerHTML = '';
        project.images.forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.src = image;
            thumb.alt = `Изображение ${index + 1} проекта ${project.title}`;
            thumb.classList.add('thumbnail');
            if (index === 0) thumb.classList.add('active');
            
            thumb.addEventListener('click', () => {
                // Убираем активный класс у всех миниатюр
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                // Добавляем активный класс текущей миниатюре
                thumb.classList.add('active');
                // Меняем главное изображение
                mainImage.src = image;
            });
            
            thumbnailsContainer.appendChild(thumb);
        });
    }
    
    // Показываем модальное окно
    document.getElementById('project-modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
}

// Закрытие модального окна
function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
    document.body.style.overflow = ''; // Восстанавливаем прокрутку
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Назначаем обработчики кликов на карточки проектов
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // Создаем идентификатор на основе заголовка
        const title = card.querySelector('h3').textContent;
        let projectId = '';
        
        if (title.includes('Северный')) projectId = 'severny';
        else if (title.includes('Лесной')) projectId = 'lesnoy';
        else if (title.includes('Солнечный')) projectId = 'solnechny';
        else if (title.includes('Уютный')) projectId = 'uyutny';
        else if (title.includes('Современный')) projectId = 'sovremenny';
        else if (title.includes('Классика')) projectId = 'klassika';
        
        card.addEventListener('click', () => openProjectModal(projectId));
    });
    
    // Закрытие модального окна по кнопке
    document.querySelector('.close-modal').addEventListener('click', closeProjectModal);
    
    // Закрытие модального окна по клику вне его области
    document.getElementById('project-modal').addEventListener('click', function(e) {
        if (e.target === this) closeProjectModal();
    });
    
    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeProjectModal();
    });
    
    // Инициализация фильтров (если есть)
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Убираем активный класс у всех кнопок
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                const projectCards = document.querySelectorAll('.project-card');
                
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
});
