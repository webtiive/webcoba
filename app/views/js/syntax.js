let intro = document.querySelector('.intro');
let inthead = document.querySelector('.intro-header');
let logospan = document.querySelectorAll('.intro-logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logospan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('actived');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logospan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('actived');
                    span.classList.add('.fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '100vh';
        }, 2300)
    })
})