$("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),   
        top = $(id).offset().top,
        delay = 750;
    if (top > 3000) delay = 1500;
    $('body,html').animate({scrollTop: top}, delay);
});
