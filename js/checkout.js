const checkout_login_button = document.getElementById(`checkout_login_button`);
const checkout_cuponcode_button = document.getElementById(`checkout_cuponcode_button`);
const checkout_login = document.querySelector(`.checkout_login`);
const checkout_cuponcode = document.querySelector(`.checkout_cuponcode`);

checkout_login_button.addEventListener(`click`, function () {
    checkout_login.classList.toggle(`active`);
})
checkout_cuponcode_button.addEventListener(`click`, function () {
    checkout_cuponcode.classList.toggle(`active`);
})