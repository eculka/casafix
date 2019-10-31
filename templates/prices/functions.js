(function () {
    $('.price-card-slider').slick({
        arrows: false,
        initialSlide: 1,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '60px',
        adaptiveHeight: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerPadding: '30px',
                initialSlide: 1,
                slidesToShow: 3
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '30px',
                initialSlide: 0,
                slidesToShow: 1
              }
            }
          ]
    });
})();