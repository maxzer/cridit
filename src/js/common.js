$('.js-left-menu').click(function () {
    $('.js-left-menu').removeClass('active');
    $(this).addClass('active');
});

$('.js-send').click(function () {
    $('.js-card-input').each(function () {
        let number = $(this).val().length;
        if (number < 4){
            $(this).addClass('error')
        } else {
            $(this).removeClass('error')
        }
    });

    $('.js-pass-code').each(function () {
        let number = $(this).val().length;

        if (number < 4){
            $(this).addClass('error')
        } else {
            $(this).removeClass('error')
        }

    })

});