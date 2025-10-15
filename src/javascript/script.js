$(document).ready(function() {
    $('#mobile-button').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-button').find('i').toggleClass('fa-xmark fa-bars');
    });
});