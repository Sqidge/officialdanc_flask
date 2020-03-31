
$("nav").find("a.navbar-link").click(function(e) {
    e.preventDefault();
    var divider = parseFloat($('.content_divider').css('height'),10);
    var section = $(this).attr("href");
    var diff =0
    if (section !== '#tourposter') {
        var section_top = $(section).offset().top;
        diff = section_top - divider - 10
    }
    $("html, body").animate({
        scrollTop: diff
    });
});

$("div.arrow").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top- 50
    });
});


   var h = $('nav').height();
   var tourposter = document.getElementsByClassName('tourposter');
   $(tourposter).animate({ paddingTop: h });

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});