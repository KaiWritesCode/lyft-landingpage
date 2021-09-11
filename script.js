const hamburger = document.querySelector('.hamburger i')
const navLinks = document.querySelector('.nav-links')
const body = document.querySelector('body')

hamburger.addEventListener('click', collapseNav)

function collapseNav() {
    navLinks.classList.toggle('open')
    body.classList.toggle('hide')
}