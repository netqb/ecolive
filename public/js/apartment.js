const projects = [
    {
        id: 1,
        title: 'ЖК «Зелёный Берег»',
        flats: [
            { id: 101, rooms: 1, area: 45, price: 5.2, floor: 5, image: '/images/apartment.jpg', building: 'Корпус 1' },
            { id: 102, rooms: 1, area: 52, price: 6.1, floor: 12, image: '/images/apartment2.jpg', building: 'Корпус 1' },
            { id: 103, rooms: 2, area: 68, price: 8.3, floor: 7, image: '/images/apartment3.jpg', building: 'Корпус 2' }
        ]
    },
    {
        id: 2,
        title: 'ЖК «Эко Хаус»',
        flats: [
            { id: 201, rooms: 2, area: 70, price: 9.0, floor: 10, image: '/images/apartment3.jpg', building: 'Корпус A' },
            { id: 202, rooms: 3, area: 85, price: 11.2, floor: 5, image: '/images/apartment.jpg', building: 'Корпус B' }
        ]
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

window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const objectId = params.get('object_id');
    const apartmentId = params.get('apartment');

    if (!objectId || isNaN(objectId)) {
        document.querySelector(".container").innerHTML = "<h2>Неверный ID объекта</h2>";
        return;
    }

    const project = projects.find(p => p.id === parseInt(objectId));

    if (!project) {
        document.querySelector(".container").innerHTML = "<h2>Объект не найден</h2>";
        return;
    }

    const flat = project.flats.find(f => f.id === parseInt(apartmentId));

    if (!flat) {
        document.querySelector(".container").innerHTML = "<h2>Квартира не найдена</h2>";
        return;
    }

    document.getElementById("apartment-project-name").textContent = project.title;
    document.getElementById("apartment-rooms").textContent = flat.rooms;
    document.getElementById("apartment-area").textContent = flat.area;
    document.getElementById("apartment-floor").textContent = flat.floor;
    document.getElementById("apartment-building").textContent = flat.building;
    document.getElementById("apartment-price").textContent = flat.price;
    document.getElementById("apartment-image").src = flat.image;

    const backButton = document.getElementById("back-to-object-btn");
    backButton.href = `/object.html?id=${objectId}`;
});