// Variables desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Variables mobile
const menuHamburguer = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

//  Variables shopping cart
const shoppingCart =document.querySelector(".navbar-shopping-cart");
const shoppingCardContainer = document.querySelector("#shopping-card-container");

// SHOW AND HIDE MENU DESKTOP
menuEmail.addEventListener("click", () => {
  const isMobileShoppingCartClose = !shoppingCardContainer.classList.contains('inactive-product-detail');

  desktopMenu.classList.toggle("inactive-menu");

  if(isMobileShoppingCartClose) {
    shoppingCardContainer.classList.toggle("inactive-product-detail");
  }  

});

// SHOW AND HIDE MENU MOBILE
menuHamburguer.addEventListener("click", () => {
  const isMobileShoppingCartClose = !shoppingCardContainer.classList.contains('inactive-product-detail');

  menuMobile.classList.toggle("inactive-menu-mobile");
  
  if(isMobileShoppingCartClose) {
    shoppingCardContainer.classList.toggle("inactive-product-detail");
  }
});

// SHOW AND HIDE PRODUCT DETAIL CART
shoppingCart.addEventListener("click", () => {

  const isMobileMenuOpen = menuMobile.classList.contains('inactive-menu-mobile');

  shoppingCardContainer.classList.toggle("inactive-product-detail");

  if(isMobileMenuOpen){
    menuMobile.classList.toggle("inactive-menu-mobile");
  }

});

// Dinamic Data of products
const productList = [];

for(let i = 0; i < 6; i++) {
  productList.push({
    name: 'Nike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  
  });
}

const cardsContainer = document.querySelector('.cards-container');

for(product of productList){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img');
  img.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;

  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');

  const productInfoImgCard = document.createElement('img');
  productInfoImgCard.setAttribute('src', 'icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productInfoImgCard);
  
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(img);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}