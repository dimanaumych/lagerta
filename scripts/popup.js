let popup_elem_membership = document.querySelector('.popup-membership');
let popup_elem_partnership = document.querySelector('.popup-partnership');
let popup_elem_participation = document.querySelector('.popup-participation');
let popup_close = document.querySelector('.popup-close');
let popup_close_array = $('.popup-close');
let first_step = document.querySelector('.first-step-wrapper');
let second_step = document.querySelector('.second-step-wrapper');

    $('.btn-1').click(()=>{
        popup_elem_membership.style.display = 'flex';
    });
    console.log(popup_close_array)
    for (let i = 0; i < popup_close_array.length; i++){
        popup_close_array[i].addEventListener('click',()=>{
            popup_elem_membership.style.display = 'none';
            popup_elem_partnership.style.display = 'none';
            popup_elem_participation.style.display = 'none';
        });
    }
// MEMBERSHIP
// FEW STEPS FORM MEMBERSHIP
$('.next-btn').click(()=>{
    first_step.style.display = 'none';
    second_step.style.display = 'flex';
})
$('.back-btn').click(()=>{
    first_step.style.display = 'flex';
    second_step.style.display = 'none';
})
// MEMBERSHIP

// PARTNERSHIP
$('.btn-2').click(()=>{
    popup_elem_partnership.style.display = 'flex';
});
    $('.popup-partnership').click(()=>{
        $('.popup-success').css('display', 'flex')
    })
// PARTNERSHIP

// PARTICIPATION
$('.btn-3').click(()=>{
    popup_elem_participation.style.display = 'flex';
});
    $('.popup-success .popup-close').click(()=>{
        $('.popup-success').css('display', 'none')
    })
// PARTICIPATION