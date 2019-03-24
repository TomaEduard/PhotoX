$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    // Gallery effect JQuery
    // Attach click event to gallery-list-item
    $('.gallery-list-item').click(function() {
        // instance a variable for store click li st-item
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(1000);
        } else {
            $('.filter').not('.' + value).hide(1000);
            $('.filter').filter('.' + value).show(1000);
        }
    });

    // Change color for active-item*css
    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });
});