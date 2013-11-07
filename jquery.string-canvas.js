(function($) {

    text = "Vinicio";

    function onClick() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText("Hello World 2", 10, 50);


    }
    // name can be changed later
    $.fn.customText = function(options) {

        var ctx = this.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 10, 50);
        /*       if(options){

    // This is the easiest way to have default options.
        settings = $.extend({
            // These are the defaults.
            text: "Vinicio",
            successColor : "#000000",
            defaultColor : "#000000"
            
        }, options );
 
        }*/
        $(document)
            .on('click', this.selector, onClick);
        return this;
    };


})(jQuery);