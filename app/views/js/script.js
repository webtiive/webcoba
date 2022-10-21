let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
    navLinks.classList.toggle("show1");
}

// hamburger Menu
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".navbar");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

// Consult Toggle
const consultBtn = document.getElementById('consultBtn')
const consultPopup = document.getElementById('consultPopup')
const closeBtn = document.getElementById('close')

consultBtn.addEventListener('click', () => {
    consultPopup.classList.toggle('pop')
})

closeBtn.addEventListener('click', () => {
    consultPopup.classList.remove('pop')
})

// Scroll Animation
const nav = document.querySelector('nav');
const sub_menu = document.querySelector('.sub-menu');
const boxaa = document.querySelector('.boxaa');
const menu3 = document.querySelector('.menu3');

window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        nav.classList.add('scrolled');
        sub_menu.classList.add('scrolled');
        boxaa.classList.add('scrolled');
        menu3.classList.add('scrolled');
    } else{
        nav.classList.remove('scrolled');
        sub_menu.classList.remove('scrolled');
        boxaa.classList.remove('scrolled');
        menu3.classList.remove('scrolled');
    }
});

