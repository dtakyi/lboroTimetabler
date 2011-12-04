(function($){
	//Resize image on ready or resize
	$.fn.supersize = function() {	
		//Invoke the resizenow() function on document ready
		$(document).ready(function() {
			$('#supersize').resizenow(); 
		});
		//Invoke the resizenow() function on browser resize
		$(window).bind("resize", function() {
    		$('#supersize').resizenow(); 
		});
	};
	//Adjust image size
	$.fn.resizenow = function() {
		//Define starting width and height values for the original image
		var startwidth = 1366;  
		var startheight = 768;
		//Define image ratio
		var ratio = startheight/startwidth;
		//Gather browser dimensions
		var browserwidth = $(window).width();
		var browserheight = $(window).height();
		//Resize image to proper ratio
		if ((browserheight/browserwidth) > ratio) {
		    $(this).height(browserheight);
		    $(this).width(browserheight / ratio);
		    $(this).children().height(browserheight);
		    $(this).children().width(browserheight / ratio);
		} else {
		    $(this).width(browserwidth);
		    $(this).height(browserwidth * ratio);
		    $(this).children().width(browserwidth);
		    $(this).children().height(browserwidth * ratio);
		}
		//Make sure the image stays center in the window
		$(this).children().css('left', (browserwidth - $(this).width())/2);
		$(this).children().css('top', (browserheight - $(this).height())/2);
	};
})(jQuery);

$(document).ready(function() {
	//Invoking the supersized function on the div with id - supersize. It is the div that contains the large background image
	$("div#supersize").supersize();
});