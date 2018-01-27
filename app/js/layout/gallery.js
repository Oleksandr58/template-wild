$('.gallery__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: false,
    nextArrow: false,
    zIndex: 0,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.1,
              centerMode: true
            }
          }
      ]
});