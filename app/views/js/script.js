let htmlcssArrow = document.querySelector('.htmlcss-arrow');
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle('show1');
};
let moreArrow = document.querySelector('.more-arrow');
moreArrow.onclick = function () {
  navLinks.classList.toggle('show2');
};
let moremoreArrow = document.querySelector('.more-more-arrow');
moremoreArrow.onclick = function () {
  navLinks.classList.toggle('show3');
};
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

// Img change on reload
let imgreload = [];

imgreload[0] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076651/img/img6_dkdlec.png';
imgreload[1] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076676/img/img7_hzrdo1.png';
imgreload[2] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076650/img/img8_lvf6ar.png';
imgreload[3] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076649/img/img9_qyqfg6.png';
imgreload[4] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076657/img/img10_dlcfxs.png';

window.onload = function () {
  const random = Math.floor(Math.random() * imgreload.length);

  const test = (document.querySelector('.img-change').style.backgroundImage = `url(${imgreload[random]})`);
};
