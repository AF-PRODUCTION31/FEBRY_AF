$(document).ready(function () {
    // Remove Preloader
    $("#preloader").fadeOut("slow");

    // Set Animasi
    init_animate();
});

// Trigger Element With Class animate_animated
function init_animate() {
    $(".animate_animated").each(function () {
        $(this).on('inview', function (event, isInView) {
            // Mengambil nilai dari atribut data-animate
            var animate_class = $(this).attr("data-animate");
        
            //mendeteksi element ketika tampil
            if (isInView) {
                // Jika tampil / visible
                $(this).addClass(animate_class);
            } else {
                // jika tidak tampil / not visible
                $(this).removeClass(animate_class)
            }
        });
    });
}

$(document).ready(function () {
    // Remove Preloader
    $("#preloader").fadeOut("slow");

    // Set Animasi
    init_animate();

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: false
            }
        }
    })
});
