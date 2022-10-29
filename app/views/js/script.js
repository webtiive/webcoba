let htmlcssArrow = document.querySelector('.htmlcss-arrow');
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle('show1');
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

let imgreload = [];

imgreload[0] = '../img/img1.png';
imgreload[1] = '../img/img2.png';
imgreload[2] = '../img/img3.png';
imgreload[3] = '../img/img4.png';
imgreload[4] = '../img/img5.png';

window.onload = function () {
  const random = Math.floor(Math.random() * imgreload.length);

  const test = (document.querySelector('.img-change').style.backgroundImage = `url(${imgreload[random]})`);
};
const myfunc = () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLink = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('#menu-toggle');
  const logoName = document.querySelector('.logo-name');

  if (!menuToggle.checked) {
    navLink.style.display = 'block';
    logoName.style.display = 'block';
  } else {
    navLink.style.display = 'none';
    logoName.style.display = 'none';
  }
};

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   900: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  // },
});

const prevSlide = document.querySelector('.swiper-slide-prev');
