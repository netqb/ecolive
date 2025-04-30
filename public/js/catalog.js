document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: 1,
            title: 'ЖК «Зелёный Берег»',
            description: 'Современный комплекс у реки с собственным парком',
            price: 'от 5,2 млн ₽',
            image: '/images/green-shore.jpg',
            details: '3 корпуса, 25 этажей, подземный паркинг',
            tags: ['green']
        },
        {
            id: 2,
            title: 'ЖК «Эко Хаус»',
            description: 'Энергоэффективные дома с солнечными панелями',
            price: 'от 7,8 млн ₽',
            image: '/images/eco-house.jpg',
            details: 'Пассивные дома класса А++, солнечные батареи',
            tags: ['eco']
        },
        {
            id: 3,
            title: 'ЖК «Лесные Поляны»',
            description: 'Квартиры с видом на лес и террасами',
            price: 'от 9,1 млн ₽',
            image: '/images/forest-fields.jpg',
            details: 'Видовые квартиры с панорамными окнами',
            tags: ['green']
        },
        {
            id: 4,
            title: 'ЖК «Речные массивы»',
            description: 'Квартиры с видом на реку Москва',
            price: 'от 10,5 млн ₽',
            image: '/images/river.jpg',
            details: 'Видовые квартиры с панорамными окнами',
            tags: ['air']
        },
        {
            id: 5,
            title: 'ЖК «Чудесные зори»',
            description: 'Квартиры с видом на Москва-Сити и Москву-реку',
            price: 'от 7,23 млн ₽',
            image: '/images/river2.jpg',
            details: 'Видовые квартиры с панорамными окнами',
            tags: ['air']
        },
        {
            id: 6,
            title: 'ЖК «Парящие облака»',
            description: 'Квартиры с собственным парком и террасами',
            price: 'от 12,1 млн ₽',
            image: '/images/nicejk.jpg',
            details: 'Видовые квартиры с панорамными окнами',
            tags: ['green']
        },
        {
            id: 7,
            title: 'ЖК «Парящие облака»',
            description: 'Квартиры с собственным парком и террасами',
            price: 'от 12,1 млн ₽',
            image: '/images/nicejk.jpg',
            details: 'Видовые квартиры с панорамными окнами',
            tags: ['green']
        },
        {
            id: 8,
            title: 'ЖК «Парящие облака»',
            description: 'Квартиры с собственным парком и террасами',
            price: 'от 12,1 млн ₽',
            image: '/images/nicejk.jpg',
            details: 'Видовые квартиры с панорамными окнами',
            tags: ['green']
        },
        {
            id: 9,
            title: 'ЖК «Парящие облака»',
            description: 'Квартиры с собственным парком и террасами',
            price: 'от 12,1 млн ₽',
            image: '/images/nicejk.jpg',
            details: 'Видовые квартиры с панорамными окнами',
            tags: ['green', 'air']
        }
    ];

    const renderProjects = (filteredProjects) => {
        const grid = document.getElementById('catalog-grid');
        if (!grid) return;

        grid.innerHTML = filteredProjects.map(project => `
            <div class="catalog-card" data-tags="${project.tags.join(' ')}">
                <img src="${project.image}" alt="${project.title}">
                <div class="card-content">
                    ${project.tags.length > 0
                ? `<div class="card-tags">
                         ${project.tags.map(tag => `
    <span class="card-tag card-tag--${tag}">
        ${tag === 'green' ? '🌿 Зелёные зоны' :
                        tag === 'eco' ? '♻️ Эко-технологии' :
                            tag === 'air' ? '🎈 Свежий воздух' :
                                tag}
    </span>
`).join('')}
                          </div>`
                : ''
            }
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="price">${project.price}</div>
                    <a href="/object.html?id=${project.id}" class="btn btn--secondary btn--small">Подробнее</a>
                </div>
            </div>
        `).join('');
    };

    const filterSelect = document.querySelector('.filter-select');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const value = e.target.value;
            const filtered = value === 'all'
                ? projects
                : projects.filter(p => p.tags.includes(value));
            renderProjects(filtered);
        });
    }

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = projects.filter(p =>
                p.title.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term)
            );
            renderProjects(filtered);
        });
    }

    renderProjects(projects);
});

const filtersSection = document.getElementById('filters');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

if (filtersSection) {
    observer.observe(filtersSection);
}

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

document.querySelector('.btn-reset-filters')?.addEventListener('click', () => {
    document.querySelector('.filter-select').value = 'all';
    document.querySelector('.search-input').value = '';
    const event = new Event('input', { bubbles: true });
    document.querySelector('.search-input').dispatchEvent(event);
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