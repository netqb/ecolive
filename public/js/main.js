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


