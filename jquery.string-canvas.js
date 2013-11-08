(function($) {

   var settings = {
        text: "String not provided",
        color : "black",
        fontSize : "30px",
        fontFamily : "Arial"
    };

    var methods = {  

        init :  function(options){
            // default options           
            var defaults = $.extend(settings, options);            
            var canvas = this[0];
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = defaults.color;
            ctx.font      = defaults.fontSize +' '+ defaults.fontFamily;

            return this;
        },
        update: function(options){

            if(options){
                settings = $.extend(settings, options[1]);
            }
            var canvas = this[0];
            var ctx = canvas.getContext("2d");
            canvas.width = canvas.width;
            ctx.fillStyle = settings.color;
            ctx.font      = settings.fontSize +' '+ settings.fontFamily;   
            ctx.fillText(settings.text, 10, 50);       

            return this;
        }
    };

    $.fn.customText = function () {
        var method = arguments[0];
 
        // Check if the passed method exists
        if(methods[method]) { 

            method = methods[method];
 
        // If the method is not found, check if the method is an object (JSON Object) or one was not sent.
        } else if( typeof(method) == 'object' || !method ) {
             // If we passed parameters as the first object or no arguments, just use the "init" methods
            method = methods.init;
        } else { 
            // Not a method and not parameters, so return an error.  Something wasn't called correctly.
            $.error( 'Method ' +  method + ' does not exist on jQuery.customText' );
            return this;
        } 
        // Call our selected method
        return method.call(this, arguments);
    };  


})(jQuery);