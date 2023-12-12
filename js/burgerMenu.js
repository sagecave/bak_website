document.getElementById('mobile-menu').addEventListener('click', function () {
    let menu = document.getElementById('burger-menu');
    menu.classList.toggle('menu-open');
});

document.getElementById('mobile-menu').addEventListener('click', function () {
    let nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
});
