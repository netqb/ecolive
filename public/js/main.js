document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: 1,
            title: 'ЖК «Зелёный Берег»',
            description: 'Современный комплекс у реки с собственным парком',
            price: 'от 5,2 млн ₽',
            image: '/images/green-shore.jpg',
            details: '3 корпуса, 25 этажей, подземный паркинг'
        },
        {
            id: 2,
            title: 'ЖК «Эко Хаус»',
            description: 'Энергоэффективные дома с солнечными панелями',
            price: 'от 7,8 млн ₽',
            image: '/images/eco-house.jpg',
            details: 'Пассивные дома класса А++, солнечные батареи'
        },
        {
            id: 3,
            title: 'ЖК «Лесные Поляны»',
            description: 'Квартиры с видом на лес и террасами и с собственным парком',
            price: 'от 9,1 млн ₽',
            image: '/images/forest-fields.jpg',
            details: 'Видовые квартиры с панорамными окнами'
        },
        {
            id: 4,
            title: 'ЖК «Речные массивы»',
            description: 'Квартиры с видом на реку москву и собственным парком',
            price: 'от 10,5 млн ₽',
            image: '/images/river.jpg',
            details: 'Видовые квартиры с панорамными окнами'
        },
        {
            id: 5,
            title: 'ЖК «Чудесные зори»',
            description: 'Квартиры с видом на москва-сити и москву реку',
            price: 'от 7,23 млн ₽',
            image: '/images/river2.jpg',
            details: 'Видовые квартиры с панорамными окнами'
        },
        {
            id: 6,
            title: 'ЖК «Парящие облака»',
            description: 'Квартиры с собственным парком и террасами',
            price: 'от 12,1 млн ₽',
            image: '/images/nicejk.jpg',
            details: 'Видовые квартиры с панорамными окнами'
        }
    ];

    renderProjects(projects);
});

function renderProjects(projects) {
    const grid = document.querySelector('.projects-grid');

    grid.innerHTML = projects.map(project => `
      <div class="project-card" data-id="${project.id}">
        <div class="project-image-container">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-badge">Новинка</div>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-price">${project.price}</div>
          <div class="project-details" style="display:none">${project.details}</div>
          <button class="btn btn-more">Подробнее</button>
        </div>
      </div>
    `).join('');

    // Обработчики для кнопок
    document.querySelectorAll('.btn-more').forEach(btn => {
        btn.addEventListener('click', function () {
            const details = this.parentElement.querySelector('.project-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
}


function showModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("callbackModal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

document.querySelector('.modal__overlay')?.addEventListener('click', closeModal);

document.getElementById("callbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Спасибо! Мы скоро вам перезвоним.");

    document.querySelector("#callbackForm input[type='text']").value = "";
    document.querySelector("#callbackForm input[type='tel']").value = "";

    closeModal();
});

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

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach(link => {
        const href = link.getAttribute("href").replace(/\/$/, "");
        const path = currentPath.replace(/\/$/, "");

        if (path === href) {
            link.classList.add("active");
        }
    });
});

const map = L.map('projects-map').setView([55.751244, 37.618423], 12);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenTopoMap contributors',
    maxZoom: 17,
}).addTo(map);

const projects = [
    {
        title: 'ЖК «Зелёный Берег»',
        description: 'Современный комплекс у реки с собственным парком',
        price: 'от 5,2 млн ₽',
        image: '/images/green-shore.jpg',
        coords: [55.751244, 37.618423],
        tags: ['green']
    },
    {
        title: 'ЖК «Эко Хаус»',
        description: 'Энергоэффективные дома с солнечными панелями',
        price: 'от 7,8 млн ₽',
        image: '/images/eco-house.jpg',
        coords: [55.761244, 37.628423],
        tags: ['eco']
    }
];

projects.forEach(project => {
    const marker = L.marker(project.coords).addTo(map);
    marker.bindPopup(`
     <div style="max-width: 250px; text-align: center;">
       <strong>${project.title}</strong><br>
       <em>${project.price}</em><br>
       <small>${project.description}</small>
     </div>
   `);
});

const ecoIcon = L.divIcon({
    className: 'custom-marker',
    html: '<span>🌿</span>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

L.marker([55.741244, 37.608423], { icon: ecoIcon }).addTo(map)
    .bindPopup("<strong>Новый ЖК ЭкоТаун</strong><br>Скоро появится!");