// get element
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