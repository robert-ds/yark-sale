// Variables desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Variables mobile
const menuHamburguer = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

// SHOW AND HIDE MENU DESKTOP
menuEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive-menu");
});

// SHOW AND HIDE MENU MOBILE
menuHamburguer.addEventListener("click", () => {
  menuMobile.classList.toggle("inactive-menu-mobile");
});