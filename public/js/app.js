$(".toggle").click(function() {
    $(".nav-bar").slideToggle();
  $(this).toggleClass("is-active");
});
$(".dropdown").click(function() {
    $(".sub-nav").slideToggle();
    $(this).toggleClass("active");
});

$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.app'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	