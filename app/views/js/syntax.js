const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.getElementById('splash').style.opacity = 0;
    }, 3000);
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
    }, 5000);

    setTimeout(() => {
        document.getElementById('fade').style.opacity = 0;
    }, 1000);
});