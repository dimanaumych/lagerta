jQuery(document).ready(function($) {
    $('#form-popup').submit(function (e) {
        if($('#user-name-popup').val() == '' || $('#user-phone-popup').val() == ''){
            alert('Одно из полей не заполнено!');
            e.preventDefault();
        }else {
            e.preventDefault()
            let input_value_name = $('#user-name-popup').val();
            let input_value_phone = $('#user-phone-popup').val();
            let email_adress = $('.feedback-form-email').text();
            let feedback = '';
            console.log(input_value_name, input_value_phone, email_adress);
            feedback = '1) Заявку оставил клиент с именем: ' + input_value_name + '\n2) Номер телефона: '+ input_value_phone;
            let obj = {
                email : email_adress,
                feedback: feedback
            };
            console.log(obj);
            var $form = $(this);
            $.ajax({
                type: 'POST',
                url: '/wp-content/themes/IO-WP/mail.php',
                data: 'contact=' + JSON.stringify(obj),
            }).done(function (data) {
                jQuery('#form-popup')[0].reset();
                jQuery('.popup-call-back').css("display","none");
                $('.popup-result').css('display', 'flex');
            }).fail(function (data) {
                console.log(data);
            });
            //отмена действия по умолчанию для кнопки submit
            e.preventDefault();
        }
    });
});