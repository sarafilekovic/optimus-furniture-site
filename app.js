const navbar = document.getElementById('navbar-links');
const openMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-hamburger');

openMenu.addEventListener('click', () => {
  navbar.style.display = 'flex';
  navbar.style.top = '0';
});

closeMenu.addEventListener('click', () => {
  navbar.style.top = '-100%';
});

