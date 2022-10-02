// sidebar submenu open close js code
const darkToggle = document.querySelector(".dark-mode");
const font = document.querySelector('.font')


let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
    navLinks.classList.toggle("show1");
}

// dark mode
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-mode");

let getMode = localStorage.getItem("mode");
if (getMode && getMode == "dark-mode") {
    body.classList.add("dark");
}

let getFont = localStorage.getItem("font");
// set dark mode font
if (getMode && getMode == "dark-mode") {
    font.classList.toggle("bx-sun");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    font.classList.toggle("bx-sun")
    if (font.classList == "bx-moon") {
        font.classList.toggle("bx-sun")
    }

    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
    //js code to keep font 
    if (!body.classList.contains("dark")) {
        localStorage.setItem("font", "moon");
    } else {
        localStorage.setItem("font", "sun");
    }
});

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".navbar");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});