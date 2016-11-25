jQuery( document ).ready(function( $ ) {
					 "use strict";
		
	/*---------------gallery popoup triger-------------------*/
	$('.popup-gallery').magnificPopup({
		delegate: '.project-overlay-content .image-popup,.gallery-border .image-popup',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

  
	
   
});	


	
