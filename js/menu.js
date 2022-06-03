// header responsive
const responsive_menu_show = document.querySelector(`.responsive_menu_show`);
const responsive_menu_close = document.querySelector(`.menu-close`);
const responsive_header = document.querySelector(`.responsive_header`);
const menu_cart = document.querySelector(`.menu_cart`);
const shopping_cart = document.querySelector(`.shopping-cart`);
const responsive_shopping_cart = document.querySelector(`.responsive_shopping_cart`);

responsive_menu_show.addEventListener(`click`, function () {
    responsive_menu_show.classList.add(`active`);
    responsive_header.classList.add(`active`);
    responsive_menu_close.classList.add(`active`);
});
responsive_menu_close.addEventListener(`click`, function () {
    responsive_header.classList.remove(`active`);
    responsive_menu_show.classList.remove(`active`);
    responsive_menu_close.classList.remove(`active`);
    menu_cart.classList.remove(`active`);

});

shopping_cart.addEventListener(`click`, function () {
    menu_cart.classList.toggle(`active`);
})
responsive_shopping_cart.addEventListener(`click`, function () {
    menu_cart.classList.toggle(`active`);
})