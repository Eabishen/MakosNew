const navbar = document.querySelector('#NavBar');
const mainCover = document.querySelector('#main-cover');
const head = document.querySelector('#headed')

// // console.log(head.clientHeight)
// const innerHei = head.clientHeight;
// mainCover.style.paddingTop = innerHei + "px";

function stickynavbar() {
    if (window.scrollY >= 10) {
        head.classList.add('stickybox');

    } else {
        head.classList.remove('stickybox');

    }
}
window.addEventListener('scroll', stickynavbar);

/*=============== SHOW MENU ===============*/
const custNavbar = document.querySelector('.header');
const navMenu = document.querySelector('.nav__menu');
const headhieght = custNavbar.clientHeight;

// navMenu.style.top = headhieght + "px";

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () => {
        console.log("clicked");
        nav.classList.toggle("show-menu")

        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    dropdownButton.addEventListener("click", () => {
        const showDropdown = document.querySelector('.show-dropdown')
        toggleItem(item)
        if (showDropdown && showDropdown != item) {
            toggleItem(showDropdown)
        }
    })
})

const toggleItem = (item) => {
    const dropdownContainer = item.querySelector(".dropdown__container")

    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute("style")
        item.classList.remove("show-dropdown")
    } else {
        dropdownContainer.style.height = 'fit-content'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/

const mediaQuery = matchMedia('(min-width:1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container')


const removeStyle = () => {
    if (mediaQuery.matches) {
        dropdownContainer.forEach(e => {
            e.removeAttribute('style')
        })

        dropdownItems.forEach(e => {
            e.classList.remove("show-dropdown")
        })
    }
}

addEventListener("resize", removeStyle)



function dynamicheight() {
    const navheight = document.querySelector('.cust-nav').clientHeight;
    const root = document.querySelector(':root')
    const whopage = document.querySelector('#whowepageheader')

    // whopage.style.marginTop = `${navheight}px`

    root.style.setProperty('--header-navdynamic', `${navheight}px`)
    // stl.style.setProperty('--header-navdynamic', `${navheight}px`)
}

window.addEventListener("DOMContentLoaded", dynamicheight)
window.addEventListener("resize", dynamicheight)


