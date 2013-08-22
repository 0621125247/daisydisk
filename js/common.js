$(document).ready(function() {
    var active_slide = $(".cycle-slide-active");
    active_slide.next().addClass("is-big");
    $( '.js-slider' ).on( 'cycle-next', function( event, opts ) {
        $(".cycle-slide").removeClass("is-big");
        $(".cycle-slide-active").next().next().addClass("is-big");
    });
    $( '.js-slider' ).on( 'cycle-prev', function( event, opts ) {
        $(".cycle-slide").removeClass("is-big");
        $(".cycle-slide-active").addClass("is-big");
    });
});