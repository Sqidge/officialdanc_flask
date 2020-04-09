
$("nav").find("a.navbar-link").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    var diff =0
    if (section !== '#tourposter') {
        var section_top = $(section).offset().top;
        diff = section_top - 50
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
    $('#events_table').DataTable({
        "paging": true,
        "ordering": false,
        "info":     false,
        "searching": false,
        "lengthChange": false,
        "scrollX":false,
        "scrollY":false,
        "fnDrawCallback": function(oSettings) {
        if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
            $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
        }
    }});
});