function toggleMenu(visible) {
    document.querySelector('.menu__manager__container').classList.toggle('show', visible)
}

document.querySelector('.menu__logo_hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});