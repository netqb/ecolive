document.getElementById("mortgage-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const price = parseFloat(document.getElementById("price").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const term = parseInt(document.getElementById("term").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (!price || !downPayment || !term || !rate) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const loanAmount = price - downPayment;
    const monthlyRate = (rate / 100) / 12;
    const months = term * 12;

    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById("result").innerHTML =
        `Ежемесячный платёж: <strong>${payment.toFixed(0)} ₽</strong>`;
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