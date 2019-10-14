
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$("div.arrow").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});


   var h = $('nav').height();
   var tourposter = document.getElementsByClassName('tourposter');
   $(tourposter).animate({ paddingTop: h });

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});