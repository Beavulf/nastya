// Кнопка оповещения отправления сообщения
const items_feedback = document.querySelector('.items_feedback')
const submitButton = document.querySelector('#submit_button')
submitButton.addEventListener('click',()=>{
    items_feedback.style.opacity = 1
    const timeClick = setTimeout(() => {
        items_feedback.style.opacity = 0;
}, 3500);})
