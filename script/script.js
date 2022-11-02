const btnMobile = document.getElementById("header-nav-btn-mobile");

function toggleMenu() {
     const nav = document.getElementById("header-nav");
     nav.classList.toggle('header-nav-active')
} 

btnMobile.addEventListener('click', toggleMenu);