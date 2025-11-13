$(document).ready(function() {
    $('#mobile-button').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-button').find('i').toggleClass('fa-xmark fa-bars');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop(); - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }
        else {
            header.css('box-shadow', '5px 1px 4px rgba(0, 0, 0, 0.1)');
        }

        navItems.removeClass('active');


        sections.each(function(index) {
            const section = $(this);
            const sectionTop = section.offset().top - header.outerHeight();
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = index;
                return false; 
            }            
        });


    $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 1500,
        distance: '10%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 800,
        distance: '20%',
        interval: 200,
    });

    ScrollReveal().reveal('#review-chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'left',
        duration: 1200,
        distance: '20%',
    });
    
});