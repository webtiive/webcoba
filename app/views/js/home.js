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