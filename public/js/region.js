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