const openMenuBtn = document.querySelector("header .hamburger i");
const menuBlock = document.querySelector("header .nav-list");
const closeMenuBtn = document.querySelector("header .close-menu i");
const menuItems = [...document.querySelectorAll("header .nav-list li a")]; 
openMenuBtn.addEventListener("click", () => menuBlock.classList.add("mobileMenu"));
closeMenuBtn.addEventListener("click", () => menuBlock.classList.remove("mobileMenu"));
menuItems.forEach(item => item.addEventListener("click", () => menuBlock.classList.remove("mobileMenu")))