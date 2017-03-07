$(".bg-animation").hover(   
    function () {
        var $this = $(this);
        $this.removeClass("animation-off");
        $this.addClass("animation-hover");
        setTimeout(function() {
            $this.addClass("animation-off");
            $this.removeClass("animation-hover");
        }, 8000);
    },
    function () {
        //$(this).removeClass("x");
    }
);
