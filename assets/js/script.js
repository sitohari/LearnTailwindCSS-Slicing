const navLinks =  document.querySelector('.nav-links');

function oneToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' :  'menu'
    navLinks.classList.toggle("top-24");
}