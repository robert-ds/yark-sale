// Variables desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Variables mobile
const menuHamburguer = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

//  Variables shopping cart
const shoppingCart =document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

// SHOW AND HIDE MENU DESKTOP
menuEmail.addEventListener("click", () => {
  const isMobileShoppingCartClose = !productDetail.classList.contains('inactive-product-detail');

  desktopMenu.classList.toggle("inactive-menu");

  if(isMobileShoppingCartClose) {
    productDetail.classList.toggle("inactive-product-detail");
  }  

});

// SHOW AND HIDE MENU MOBILE
menuHamburguer.addEventListener("click", () => {
  const isMobileShoppingCartClose = !productDetail.classList.contains('inactive-product-detail');

  menuMobile.classList.toggle("inactive-menu-mobile");
  
  if(isMobileShoppingCartClose) {
    productDetail.classList.toggle("inactive-product-detail");
  }
});

// SHOW AND HIDE PRODUCT DETAIL CART
shoppingCart.addEventListener("click", () => {

  const isMobileMenuOpen = menuMobile.classList.contains('inactive-menu-mobile');

  productDetail.classList.toggle("inactive-product-detail");

  if(isMobileMenuOpen){
    menuMobile.classList.toggle("inactive-menu-mobile");
  }

});