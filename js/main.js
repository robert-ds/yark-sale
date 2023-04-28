const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// SHOW AND HIDE MENU
menuEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive-menu");
});