$(document).ready(function() {
    // $(function() {
    //   // initialize scrollable
    //   $(".scrollable").scrollable();
    // });

    // $(".calendar-slider__item:first").next().next().children().addClass("calendar_active");
    // $(".day-next, .day-prev").click(function(){
    //     $(".calendar").removeClass("calendar_active");
    // });
    $('.scrollable').scrollable({
        circular: true,
        onSeek: function() {
            var index = this.getItems().eq(this.getIndex());
            $(index).next().addClass("is-active");
        }
    });
    $(".browse").click(function(){
        $(".items img").removeClass("is-active");
    });

    //api = $('.scrollable').data('scrollable');
});