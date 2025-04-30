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
});