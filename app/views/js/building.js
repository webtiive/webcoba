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