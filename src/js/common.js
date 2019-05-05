$('.js-left-menu').click(function () {
    $('.js-left-menu').removeClass('active');
    $(this).addClass('active');
});

$('.js-send').click(function () {

    $('.js-card-input').each(function () {
        let number = $(this).val().length;
        if (number < 4){
            $(this).addClass('error');

        } else {
            $(this).removeClass('error');
        }
    });

    $('.js-pass-code').each(function () {
        let number = $(this).val().length;

        if (number < 3){
            $(this).addClass('error')
        } else {
            $(this).removeClass('error')
        }

    });

    let cardName = $('.js-name');
    var regexp = /^[a-z\s]+$/i;
       if(!regexp.test($(cardName).val()) || $(cardName).val().length < 4) {
           $(cardName).addClass('error')
       } else {
          $(cardName).removeClass('error')
       }

       let hasErrors = $('.js-card-input').hasClass('error') || $('.js-pass-code').hasClass('error') || $(cardName).hasClass('error');
       if (hasErrors) {
           alert('В форме ошибки')
       } else {
           alert('Форма отправленна')
       }
});