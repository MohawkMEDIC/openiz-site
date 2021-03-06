$(document).ready( function() {
    $('#myCarousel').carousel({
		interval:  10000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.slider-nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.slider-nav').children().length -1;
			var current = $('.slider-nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.slider-nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});
