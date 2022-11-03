const btnMobile = document.getElementById("header-nav-btn-mobile");

function toggleMenu() {
     const nav = document.getElementById("header-nav");
     nav.classList.toggle('header-nav-active')

     const menu = document.getElementById("body");
     menu.classList.toggle('scroll')
}

btnMobile.addEventListener('click', toggleMenu);