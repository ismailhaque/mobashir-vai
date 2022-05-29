const video_modal = document.getElementById('course-video');
const add_modal = document.querySelectorAll('.add_btn');
const alClose = document.querySelector(`.al-close`); 
const modal_content = document.querySelector(`.modal-content`);

add_modal.forEach(element => {
    element.addEventListener(`click`, function () {
        video_modal.classList.add('active');
    })
});

alClose.addEventListener('click', function(){
    video_modal.classList.remove('active');
});
video_modal.addEventListener('click', function(){
    if (modal_content != this) {
        video_modal.classList.remove('active');
    }
});

