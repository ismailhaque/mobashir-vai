// get element
// Accordion js
const header = document.querySelectorAll(`.faq_header`);

header.forEach(item => {

    item.addEventListener(`click`, function () {
        
        header.forEach(item => {
            if ( item != this ) {
                item.nextElementSibling.classList.remove(`active`);
                item.lastElementChild.innerHTML=`+`;
            }
        });
        item.nextElementSibling.classList.toggle(`active`);
        item.lastElementChild.innerHTML=`-`;
    })
});
// Accordion js end
// search_option js
const search_option_show = document.querySelector(`#search_option_show`);
const search_option_close = document.querySelector(`#search_option_close`);
const category_search_option = document.querySelector(`#category_search_option`);
const shop_all_coures = document.querySelector(`#shop_all_coures`);

search_option_show.addEventListener(`click`, function(){
    category_search_option.classList.add(`active`);
    shop_all_coures.classList.add(`active`);
    search_option_show.classList.add(`active`);
    search_option_close.classList.remove(`active`);
});

search_option_close.addEventListener(`click`, function(){

    search_option_show.classList.remove(`active`);
    category_search_option.classList.remove(`active`);
    shop_all_coures.classList.remove(`active`);
    search_option_close.classList.add(`active`);
});