(function () {
    $(window).on("load resize scroll",function(e){
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        document.body.style.paddingTop = navbarHeight+'px';
    });

    $('.review-slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '60px',
        adaptiveHeight: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerPadding: '30px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '30px',
                slidesToShow: 1
              }
            }
          ]
    });
})();