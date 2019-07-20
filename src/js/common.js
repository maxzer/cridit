$('.js-left-menu').click(function () {
    $('.js-left-menu').removeClass('active');
    $(this).addClass('active');
});

let numberCard = function () {

    $('.js-card-input').each(function () {
        let number = $(this).val().length;
        if (number < 4) {
            $(this).addClass('error');

        } else {
            $(this).removeClass('error');
        }
    });
};

let cvvCode = function() {

    $('.js-pass-code').each(function () {
        let number = $(this).val().length;

        if (number < 3) {
            $(this).addClass('error')
        } else {
            $(this).removeClass('error')
        }

    });
};

let cardOwner = function () {
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
};

$('.js-send').click(function () {
    numberCard();
    cvvCode();
    cardOwner();
    return false;
});