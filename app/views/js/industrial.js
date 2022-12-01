// Img change on reload
let imgreload = [];

imgreload[0] = '../img/img6.png';
imgreload[1] = '../img/img7.png';
imgreload[2] = '../img/img8.png';
imgreload[3] = '../img/img9.png';
imgreload[4] = '../img/img10.png';

window.onload = function () {
    const random = Math.floor(Math.random() * imgreload.length);

    const test = (document.querySelector('.img-change').style.backgroundImage = `url(${imgreload[random]})`);
};