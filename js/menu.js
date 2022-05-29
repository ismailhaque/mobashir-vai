// header responsive
const responsive_menu_show = document.querySelector(`.responsive_menu_show`);
const responsive_menu_close = document.querySelector(`.menu-close`);
const responsive_header = document.querySelector(`.responsive_header`);

responsive_menu_show.addEventListener(`click`, function () {
    responsive_menu_show.classList.add(`active`);
    responsive_header.classList.add(`active`);
    responsive_menu_close.classList.add(`active`);
});
responsive_menu_close.addEventListener(`click`, function () {
    responsive_header.classList.remove(`active`);
    responsive_menu_show.classList.remove(`active`);
    responsive_menu_close.classList.remove(`active`);

});