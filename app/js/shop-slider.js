$(document).ready(function(){

	const headerSlider = $("#shopSlider");
	headerSlider.owlCarousel({
		loop: true,
		dots: false,
		margin: 2,
		smartSpeed: 500,
		responsive: {
			// breackpoint from 0 up
			0 : {
				items: 1
			},
			// breackpoint from 1254 up
			1254 : {
				items: 3
			}
		}
	});

	// headerSlider.on('initialized.owl.carousel', function(event) {
	// 	$('.slide-controls-number__active').text(event.item.index+1)
	// 	$('.slide-controls-number__total').text(event.item.count)
	// });


	$('#shopSliderRight').click(function() {
		headerSlider.trigger('next.owl.carousel');
	})
	$('#shopSliderLeft').click(function() {
		headerSlider.trigger('prev.owl.carousel');
	})
	// headerSlider.on('changed.owl.carousel', function(event) {
	// 	$('.slide-controls-number__active').text(event.item.index+1)
	// 	$('.slide-controls-number__total').text(event.item.count)
	// });


	
});