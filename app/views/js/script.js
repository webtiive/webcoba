// sidebar submenu open close js code
const darkToggle = document.querySelector(".dark-mode");
const font = document.querySelector('.font')


let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
    navLinks.classList.toggle("show1");
}

// Dark mode
const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));

// hamburger Menu
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".navbar");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});