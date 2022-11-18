// Img change on reload
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