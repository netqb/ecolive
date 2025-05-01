const projects = [
    {
        id: 1,
        title: 'ЖК «Зелёный Берег»',
        description: 'Современный комплекс у реки с собственным парком',
        price: 'от 5,2 млн ₽',
        image: '/images/green-shore.jpg',
        details: '3 корпуса, 25 этажей, подземный паркинг',
        tags: ['green'],
        flats: [
            { id: 101, rooms: 1, area: 45, price: 5.2, floor: 5, image: '/images/apartment.jpg', building: 'Корпус 1' },
            { id: 102, rooms: 1, area: 52, price: 6.1, floor: 12, image: '/images/apartment2.jpg', building: 'Корпус 1' },
            { id: 103, rooms: 2, area: 68, price: 8.3, floor: 7, image: '/images/apartment2.jpg', building: 'Корпус 2' },
            { id: 104, rooms: 2, area: 74, price: 9.5, floor: 15, image: '/images/apartment.jpg', building: 'Корпус 2' },
            { id: 105, rooms: 3, area: 98, price: 12.7, floor: 22, image: '/images/apartment3.jpg', building: 'Корпус 3' },
            { id: 106, rooms: 4, area: 125, price: 16.2, floor: 18, image: '/images/apartment3.jpg', building: 'Корпус 3' }
        ]
    },
    {
        id: 2,
        title: 'ЖК «Эко Хаус»',
        description: 'Энергоэффективные дома с солнечными панелями',
        price: 'от 7,8 млн ₽',
        image: '/images/eco-house.jpg',
        details: 'Пассивные дома класса А++, солнечные батареи',
        tags: ['eco'],
        flats: [
            { id: 201, rooms: 1, area: 40, price: 7.8, floor: 3, image: '/images/apartment.jpg', building: 'Корпус 1' },
            { id: 202, rooms: 2, area: 65, price: 9.5, floor: 6, image: '/images/apartment2.jpg', building: 'Корпус 1' },
            { id: 203, rooms: 3, area: 85, price: 12.0, floor: 10, image: '/images/apartment3.jpg', building: 'Корпус 2' }
        ]
    },
    {
        id: 3,
        title: 'ЖК «Лесные Поляны»',
        description: 'Квартиры с видом на лес и террасами',
        price: 'от 9,1 млн ₽',
        image: '/images/forest-fields.jpg',
        details: 'Видовые квартиры с панорамными окнами',
        tags: ['green'],
        flats: []

    },
    {
        id: 4,
        title: 'ЖК «Речные массивы»',
        description: 'Квартиры с видом на реку Москва',
        price: 'от 10,5 млн ₽',
        image: '/images/river.jpg',
        details: 'Видовые квартиры с панорамными окнами',
        tags: ['air'],
        flats: []

    },
    {
        id: 5,
        title: 'ЖК «Чудесные зори»',
        description: 'Квартиры с видом на Москва-Сити и Москву-реку',
        price: 'от 7,23 млн ₽',
        image: '/images/river2.jpg',
        details: 'Видовые квартиры с панорамными окнами',
        tags: ['air'],
        flats: []

    },
    {
        id: 6,
        title: 'ЖК «Парящие облака»',
        description: 'Квартиры с собственным парком и террасами',
        price: 'от 12,1 млн ₽',
        image: '/images/nicejk.jpg',
        details: 'Видовые квартиры с панорамными окнами',
        tags: ['green'],
        flats: []
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("preloader-hidden");
    }, 500);

    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener("click", function (e) {
            if (!this.href.startsWith(location.origin)) return;
            e.preventDefault();
            preloader.classList.remove("preloader-hidden");
            setTimeout(() => {
                window.location.href = this.href;
            }, 800);
        });
    });
});

function getURLParams() {
    const search = window.location.search || window.location.hash.split('?')[1] || '';
    return new URLSearchParams(search);
}

function initPriceSlider() {
    const slider = document.getElementById('price-slider');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');

    noUiSlider.create(slider, {
        start: [3, 15],
        connect: true,
        range: {
            'min': 0,
            'max': 30
        },
        step: 0.1
    });

    slider.noUiSlider.on('update', function (values) {
        minPrice.textContent = Math.round(values[0] * 10) / 10;
        maxPrice.textContent = Math.round(values[1] * 10) / 10;
    });
}

function renderFlats(flats, projectId) {
    const grid = document.getElementById('flats-grid');

    if (!grid) return;

    if (flats.length === 0) {
        grid.innerHTML = '<div class="no-flats">По вашему запросу квартир не найдено</div>';
        return;
    }

    grid.innerHTML = flats.map(flat => `
        <div class="flat-card">
            <div class="flat-image" style="background-image: url('${flat.image}')"></div>
            <div class="flat-content">
                <div class="flat-title">${flat.rooms}-комнатная квартира</div>
                <div class="flat-params">
                    <span>${flat.area} м²</span>
                    <span>${flat.floor} этаж</span>
                    <span>${flat.building}</span>
                </div>
                <div class="flat-price">${flat.price} млн ₽</div>
                <a href="/apartment.html?object_id=${projectId}&apartment=${flat.id}" class="btn btn--primary">Подробнее</a>
            </div>
        </div>
    `).join('');
}

function applyFilters() {
    const roomsFilter = document.querySelector('.room-btn.active').dataset.rooms;
    const minPrice = parseFloat(document.getElementById('min-price').textContent);
    const maxPrice = parseFloat(document.getElementById('max-price').textContent);
    const projectId = parseInt(getURLParams().get('id'));

    const project = projects.find(p => p.id === projectId);
    if (!project || !project.flats) return;

    let filteredFlats = project.flats.filter(flat => {
        const priceMatch = flat.price >= minPrice && flat.price <= maxPrice;
        let roomsMatch = true;

        if (roomsFilter !== 'all') {
            if (roomsFilter === '4') {
                roomsMatch = flat.rooms >= 4;
            } else {
                roomsMatch = flat.rooms === parseInt(roomsFilter);
            }
        }

        return priceMatch && roomsMatch;
    });

    renderFlats(filteredFlats, projectId);
}

window.addEventListener('DOMContentLoaded', () => {
    const params = getURLParams();
    const projectId = parseInt(params.get('id'));
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        document.querySelector('.container').innerHTML = '<h2>Объект не найден</h2>';
        return;
    }

    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-image').src = project.image;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-price').textContent = project.price;
    document.getElementById('project-details-text').textContent = project.details;

    const tagsContainer = document.getElementById('project-tags');
    tagsContainer.innerHTML = project.tags.map(tag => `
        <span class="card-tag card-tag--${tag}">
            ${tag === 'green' ? '🌿 Зелёные зоны' :
            tag === 'eco' ? '♻️ Эко-технологии' :
                tag === 'air' ? '🎈 Свежий воздух' : tag}
        </span>
    `).join('');

    initPriceSlider();

    document.querySelectorAll('.room-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.room-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('apply-filters').addEventListener('click', applyFilters);

    if (project.flats) {
        renderFlats(project.flats, projectId);
    }
});

