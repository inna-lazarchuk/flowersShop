$(document).ready(function () {
    let orhidarium = $('.orhidarium');
    let florarium = $('.florarium');

    orhidarium.css('display', 'none');

    $('#orhidarium').on("click", function () {
        orhidarium.css('display', 'block');
        florarium.css('display', 'none');
    })

    $('#florarium').on("click", function () {
        orhidarium.css('display', 'none');
        florarium.css('display', 'block');
    })

    let popupCall = $('.window_call_back');
    let close = $('.close');
    let popupInput = $('.popup_input');
    let hasError = false;
    let successFormCall = $('.success_form')

    $('.button-call').on('click', function () {
        popupCall.css('display', 'flex');
    });

    $('.icon-call').on('click', function () {
        popupCall.css('display', 'flex');
    });

    close.on("click", function () {
        popupCall.css('display', 'none');
        popupInput.val('');
        successFormCall.css('display', 'none');
        $('.container_call_back > h2').css('display', 'block');
        $('.container_call_back > p').css('display', 'block');
        $('.container_call_back > input').css('display', 'block');
        $('.container_call_back > button').css('display', 'block');
    });

    $('#popup_button').click(function () {
        $('.error_message').hide();
        if (!popupInput.val()) {
            popupInput.next().show();
            popupInput.css('border-color', 'red');
            hasError = true;
        } else {
            popupInput.css('border-color', 'unset')
        }

        if (!hasError) {
            $.ajax({
                method: 'POST',
                url: "http://testologia.ru/checkout",
                data: {name: popupInput.val()}
            })
                .done(function (msg) {
                    if (msg.hasOwnProperty('success') && msg.success === 0) {
                        alert('Возникла ошибка при вводе данных. Проверьте правильность введенной информации');
                    } else {
                        $('.container_call_back > h2').css('display', 'none');
                        $('.container_call_back > p').css('display', 'none');
                        $('.container_call_back > input').css('display', 'none');
                        $('.container_call_back > button').css('display', 'none');
                        successFormCall.css('display', 'block');
                    }
                })
        }
    });

    let popupOrder = $('.window_order_form');

    $('.button_flower').on('click', function () {
        popupOrder.css('display', 'flex');
    })

    close.on("click", function () {
        popupOrder.css('display', 'none');
        $('.popup_order_input').val('');
    })


    let orderName = $('.order_name');
    let orderPhone = $('.order_phone');
    let orderDet = $('.order_details');
    let orderForm = $('.order_form');
    let successOrderForm = $('.success_order_form');

    $('.order_button').click(function () {
        $('.error_message').hide();
        if (!orderName.val()) {
            orderName.next().show();
            orderName.css('border-color', 'red');
            hasError = true;
        } else {
            orderName.css('border-color', 'unset');
        }

        if (!orderPhone.val()) {
            orderPhone.next().show();
            orderPhone.css('border-color', 'red');
            hasError = true;

        } else {
            orderPhone.css('border-color', 'unset');
        }

        if (!orderDet.val()) {
            orderDet.next().show();
            orderDet.css('border-color', 'red');
            hasError = true;
        } else {
            orderDet.css('border-color', 'unset');
        }


        if (!hasError) {
            $.ajax({
                method: 'POST',
                url: "http://testologia.ru/checkout",
                data: {name: orderName.val(), phone: orderPhone.val(), info: orderDet.val()}
            })
                .done(function (msg) {
                    if (msg.hasOwnProperty('success') && msg.success === 1) {
                        orderForm.css('display', 'none');
                        successOrderForm.css('display', 'block')
                    } else {
                        alert('Неверное имя. Проверьте введенные данные.');
                    }
                })
        }
    });

    $('.button-success').on('click', function () {
        popupOrder.css('display', 'none');
        $('.popup_order_input').val('');
    });

    $('.order-close').on('click', function () {
        successOrderForm.css('display', 'none');
        $('.popup_order_input').val('');
        orderForm.css('display', 'block');
    });

    $('#main-button').on('click', function () {
        $('#flor')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#present-button').on('click', function () {
        $('#flor')[0].scrollIntoView({behavior: "smooth"});
    });

    $('.gallery-popup').magnificPopup({
        type: 'image'
    });

    $(".multiple-items").slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    let menu = $('#menu');

    $('.burger-menu').on('click', function () {
        menu.css('display', 'block');
    });

    $('.burger-close').on('click', function () {
        menu.css('display', 'none');
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.about-block>p').hover(function () {
        $(this).addClass('magictime perspectiveRightReturn');
    });

    $('.first-item').hover(function () {
        $(this).addClass('magictime spaceInDown');
    });

    $('.present-image').hover(function () {
        $(this).addClass('magictime tinDownIn');
    });
});
