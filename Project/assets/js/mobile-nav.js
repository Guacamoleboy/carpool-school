// Nav.js for our mobile navbar.
// Can't have a massive navbar for no reason.
// This is my solution for now

// - Guac

const openBtn = document.querySelector('.guac-navbar-mobile .guac-menu-btn:not(.close-btn)');
const closeBtn = document.querySelector('.guac-mobile-overlay .close-btn');
const overlay = document.getElementById('mobileOverlay');

openBtn.addEventListener('click', () => overlay.classList.add('show'));
closeBtn.addEventListener('click', () => overlay.classList.remove('show'));