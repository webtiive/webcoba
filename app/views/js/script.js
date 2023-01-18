let htmlcssArrow = document.querySelector('.htmlcss-arrow');
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle('show1');
};
let moreArrow = document.querySelector('.more-arrow');
moreArrow.onclick = function () {
  navLinks.classList.toggle('show2');
};
// let moremoreArrow = document.querySelector('.more-more-arrow');
// moremoreArrow.onclick = function () {
//   navLinks.classList.toggle('show3');
// };
let jsArrow = document.querySelector('.js-arrow');
jsArrow.onclick = function () {
  navLinks.classList.toggle('show4');
};

// hamburger Menu
const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.navbar');

hamburger_menu.addEventListener('click', () => {
  container.classList.toggle('active');
});

// Consult Toggle
const consultBtn = document.getElementById('consultBtn');
const consultPopup = document.getElementById('consultPopup');
const closeBtn = document.getElementById('close');

consultBtn.addEventListener('click', () => {
  consultPopup.classList.toggle('pop');
});

closeBtn.addEventListener('click', () => {
  consultPopup.classList.remove('pop');
});

// Scroll Animation
const nav = document.querySelector('nav');
const sub_menu = document.querySelector('.sub-menu');
const boxaa = document.querySelector('.boxaa');
const menu3 = document.querySelector('.menu3');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    nav.classList.add('scrolled');
    sub_menu.classList.add('scrolled');
    boxaa.classList.add('scrolled');
    menu3.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
    sub_menu.classList.remove('scrolled');
    boxaa.classList.remove('scrolled');
    menu3.classList.remove('scrolled');
  }
});

// Hamburger menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      nav.classList.toggle('bx-x');
    });
  }
};
showMenu('hamburger-menu', 'navId');
