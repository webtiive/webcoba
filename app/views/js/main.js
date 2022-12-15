/**
 * Global variable
 */

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

// Img change on reload
let imgreload = [];

imgreload[0] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076667/img/img1_ktbgbz.png';
imgreload[1] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076676/img/img2_trsm6e.png';
imgreload[2] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076682/img/img3_vogi9b.png';
imgreload[3] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076677/img/img4_nx6lha.png';
imgreload[4] = 'https://res.cloudinary.com/dmxp1le4a/image/upload/v1671076682/img/img5_tomjei.png';

window.onload = function () {
  const random = Math.floor(Math.random() * imgreload.length);

  const test = (document.querySelector('.img-change').style.backgroundImage = `url(${imgreload[random]})`);
};

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 40,
      loop: true,
    },
  },
});

// hamburger Menu
const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.navbar');

hamburger_menu.addEventListener('click', () => {
  container.classList.toggle('active');
});

const prevSlide = document.querySelector('.swiper-slide-prev');
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
