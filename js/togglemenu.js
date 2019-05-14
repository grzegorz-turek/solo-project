function toggleMenu(visible) {
    document.querySelector('.menu__link__container').classList.toggle('show', visible)
}

document.querySelector('.menu__hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});