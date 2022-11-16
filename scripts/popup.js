let popup_elem = document.querySelector('.popup-call-back');
let popup_close = document.querySelector('.popup-close');

console.log(popup_elem);
console.log(popup_close);
    $('.call-back-btn').click(()=>{
        popup_elem.style.display = 'flex';
    });
popup_close.addEventListener('click',()=>{
    popup_elem.style.display = 'none';
});

$('.call-back-btn').click(()=>{
    popup_elem.style.display = 'flex';
});