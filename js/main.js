const navbar = document.querySelector('#NavBar');
const mainCover = document.querySelector('#main-cover');
const head = document.querySelector('#headed')

console.log(head.clientHeight)
const innerHei = head.clientHeight;
mainCover.style.paddingTop = innerHei + "px";

function stickynavbar() {
    if (window.scrollY >= 10) {
        navbar.classList.add('stickybox');

    } else {
        navbar.classList.remove('stickybox');

    }
}
window.addEventListener('scroll', stickynavbar);
