jQuery( document ).ready(function( $ ) {
					 "use strict";
		
	
	/*---------------service triger-------------------*/
	
	
	 
	 $(".hs").mouseover(function(){
        $(".service-icon1 .service-icon-inner").css("background", "#ffa744");
    });
    $(".hs").mouseout(function(){
        $(".service-icon1 .service-icon-inner").css("background", "#00526e");
    });
	$(".bs").mouseover(function(){
        $(".service-icon3 .service-icon-inner").css("background", "#ffa744");
    });
    $(".bs").mouseout(function(){
        $(".service-icon3 .service-icon-inner").css("background", "#00526e");
    });	 
	$(".vs").mouseover(function(){
        $(".service-icon2 .service-icon-inner").css("background", "#ffa744");
    });
    $(".vs").mouseout(function(){
        $(".service-icon2 .service-icon-inner").css("background", "#00526e");
    });	
	$(".cs").mouseover(function(){
        $(".service-icon4 .service-icon-inner").css("background", "#ffa744");
    });
    $(".cs").mouseout(function(){
        $(".service-icon4 .service-icon-inner").css("background", "#00526e");
    });	
	
	/*---------------service image triger-----------------*/
	$(".hs,.service-icon1 .service-icon-inner").hover(function() {
		
		$( ".hs-image" ).css('opacity','1');
		$( ".bs-image" ).css('opacity','0');
		$( ".vs-image" ).css('opacity','0');
		$( ".cs-image" ).css('opacity','0');
		
	});
	$(".bs,.service-icon3 .service-icon-inner").hover(function() {
		
		$( ".hs-image" ).css('opacity','0');
		$( ".bs-image" ).css('opacity','1');
		$( ".vs-image" ).css('opacity','0');
		$( ".cs-image" ).css('opacity','0');
		
	});
	$(".vs,.service-icon2 .service-icon-inner").hover(function() {
		$( ".bs-image" ).css('opacity','0');
		$( ".hs-image" ).css('opacity','0');
		
		$( ".vs-image" ).css('opacity','1');
		$( ".cs-image" ).css('opacity','0');
		
	});
	$(".cs,.service-icon4 .service-icon-inner").hover(function() {
		$( ".bs-image" ).css('opacity','0');
		$( ".hs-image" ).css('opacity','0');
		
		$( ".vs-image" ).css('opacity','0');
		$( ".cs-image" ).css('opacity','1');
		
		
	});
	
		$(".hs1").hover(function() {
		
		$( ".hs1-image" ).css('opacity','1');
		$( ".hs2-image" ).css('opacity','0');
		$( ".hs3-image" ).css('opacity','0');
		$( ".hs4-image" ).css('opacity','0');
		
	});
	$(".hs2").hover(function() {
		
		$( ".hs1-image" ).css('opacity','0');
		$( ".hs2-image" ).css('opacity','1');
		$( ".hs3-image" ).css('opacity','0');
		$( ".hs4-image" ).css('opacity','0');
		
	});
	$(".hs3").hover(function() {
		$( ".hs1-image" ).css('opacity','0');
		$( ".hs2-image" ).css('opacity','0');
		
		$( ".hs3-image" ).css('opacity','1');
		$( ".hs4-image" ).css('opacity','0');
		
	});
	$(".hs4").hover(function() {
		$( ".hs1-image" ).css('opacity','0');
		$( ".hs2-image" ).css('opacity','0');
		
		$( ".hs3-image" ).css('opacity','0');
		$( ".hs4-image" ).css('opacity','1');
		
		
	});
	
  /*---------------slider triger-----------------*/
	$('#banner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay:true,
			
        });
		
	$('#banner-slider2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay:true,
			
        });
	$('#banner-slider3').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay:true,
			
        });	
	$('#banner-slider4').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay:true,
			
        });		
	
	$('#cons-testi').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay:true,
			
        });	
		
	$('#gar-testi').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay:false,
			
        });		
		
	$('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
		autoplay:false,
        asNavFor: '.slider-nav',
		 responsive: [
		
    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplaySpeed:5000,
		autoplay:false,
		dots:true,
		arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
	  ]
    });
	
    $('.slider-nav').slick({
		 focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
		arrows: false,
		autoplay:false,
        centerMode: false,
		
			slidesPerRow: 1,
       
		
    });
	 //remove active class from all thumbnail slides
	 $('.slider-nav .slick-slide').removeClass('slick-current');

	 //set active class to first thumbnail slides
	 $('.slider-nav .slick-slide').eq(0).addClass('slick-current');

	 // On before slide change match active thumbnail to current slide
	 $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var mySlideNumber = nextSlide;
		$('.slider-nav .slick-slide').removeClass('slick-current');
		$('.slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-current');
	});
	
	
	
        $('.slider-main').slick({
            slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			autoplay:false,
            asNavFor: '.slider-thumbs'
        });
        $('.slider-thumbs').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-main',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        //infinite: true,
                        //dots: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
  /*---------------owl-testimonial-----------------*/
	$("#owl-testimonial").owlCarousel({
								loop:true,
								autoplay:true,
								autoplayTimeout:8000,
								autoplayHoverPause:true,
								items : 1,
								rewind: true,
								margin:30,
								responsiveClass:true,
								responsive:{
									0:{
										items:1,
										nav:true
									},
									768:{
										items:1,
										nav:true
									},
									600:{
										items:1,
										nav:true
									},
									735:{
										items:1,
										nav:true
									},
									1000:{
										items:1,
										nav:true,
										loop:false
									}
								}
						  }); 
	$("#owl-testimonialport").owlCarousel({
								loop:true,
								autoplay:true,
								autoplayTimeout:8000,
								autoplayHoverPause:true,
								items : 1,
								rewind: true,
								
								responsiveClass:true,
								responsive:{
									0:{
										items:1,
										nav:true
									},
									768:{
										items:1,
										nav:true
									},
									
									1000:{
										items:1,
										nav:true,
										loop:false
									}
								}
						  }); 					  
	$("#owl-testimonial2").owlCarousel({
								loop:true,
								autoplay:false,
								autoplayTimeout:8000,
								autoplayHoverPause:true,
								items : 3,
								rewind: true,
								margin:30,
								responsiveClass:true,
								responsive:{
									0:{
										items:1,
										nav:true
									},
									768:{
										items:2,
										nav:true
									},
									600:{
										items:2,
										nav:true
									},
									735:{
										items:2,
										nav:true
									},
									1000:{
										items:3,
										nav:true,
										loop:false
									}
								}
						  });					  

		$("#owl-testimonial3").owlCarousel({
								loop:true,
								autoplay:false,
								autoplayTimeout:8000,
								autoplayHoverPause:true,
								items : 2,
								rewind: true,
								margin:30,
								responsiveClass:true,
								responsive:{
									0:{
										items:1,
										nav:true
									},
									768:{
										items:2,
										nav:true
									},
									600:{
										items:2,
										nav:true
									},
									735:{
										items:2,
										nav:true
									},
									1000:{
										items:2,
										nav:true,
										loop:false
									}
								}
						  });				  
			$("#owl-testimonial4").owlCarousel({
								
								loop:true,
								autoplay:false,
								autoplayTimeout:8000,
								autoplayHoverPause:true,
								items : 2,
								rewind: true,
								margin:30,
								responsiveClass:true,
								responsive:{
									0:{
										items:1,
										nav:true
									},
									768:{
										items:2,
										nav:true
									},
									600:{
										items:2,
										nav:true
									},
									735:{
										items:2,
										nav:true
									},
									1000:{
										items:2,
										nav:true,
										loop:false
									}
								}
						  });
						  
	/*---------------progress bar tip-----------------*/					  
	$(function () { 
		$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
	});  
    $(".progress-bar").each(function(){
		each_bar_width = $(this).attr('aria-valuenow');
		$(this).width(each_bar_width + '%');
	  });					  
	(function() {
/****** Pie chart ********/

		$(".percentage-light").easyPieChart({
                barColor: "#00a99d",
                trackColor: "rgba(230, 230, 230, 0.5)",
                scaleColor: false,
                lineCap: "round",
                rotate: -90,
                lineWidth: 4,
                size: 260
				});
							
		$(".percentage-light").each(function(){
			var v = $(this).find('canvas').attr('width');
			$(this).parent().css('width',v);
			$(this).parent().find('span').css('line-height', v+'px');
		
		});




		$(".percentage-dark").easyPieChart({
				animate: 5000,
                barColor: "#ffa744",
                trackColor: "rgba(149, 149, 149, .2)",
                scaleColor: false,
                lineCap: "round",
                rotate: 90,
                lineWidth: 10,
                size: 270
				
				});
							
		$(".percentage-dark").each(function(){
			var v = $(this).find('canvas').attr('width');
			$(this).parent().css('width',v);
			$(this).parent().find('span').css('line-height', v+'px');
		
		});
		$("#plumbing-service-page-bar .percentage-dark2").easyPieChart({
				animate: 5000,
                barColor: "#2b90b1",
                trackColor: "rgba(0,192,255,.3)",
                scaleColor: false,
                lineCap: "round",
                rotate: 90,
                lineWidth: 10,
                size: 270
				});
							
		$(".percentage-dark2").each(function(){
			var v = $(this).find('canvas').attr('width');
			$(this).parent().css('width',v);
			$(this).parent().find('span').css('line-height', v+'px');
		
		});
})($);			
/*---------------counter triger-----------------*/				  
$('.counter h1').counterUp({
            delay: 10,
            time: 2000,
        });								  
			/*----------------------logo adhustment--------------------*/
	 $("#construction-navbar .construction-nav li a").on("load", function() {	
		var LogoHeight = $('#construction-navbar .navbar-brand img') .height();
		
    
		$('#construction-navbar .construction-nav li a').css('line-height',LogoHeight+'px');

	 })			
	/*----------------------logo2 adhustment--------------------*/
	$("#gardening-navbar .gardening-nav li a").on("load", function() {	
	var LogoHeight = $('#gardening-navbar .navbar-brand img') .height();
		
    
	$('#gardening-navbar .gardening-nav li a').css('line-height',LogoHeight+'px');						  
	 })						  
						  
/*---------------accordian triger-----------------*/
	$("#accordian > ul > li > h3").on('click',function(){
		
		$('#accordian > ul > li').removeClass('active');
		$(this).parent().addClass('active');
		
		$("#accordian ul ul").slideUp();
		
			
		if (!$(this).next().is(":visible")) {
		 $(this).next().slideDown();
		  
		}
	    return false;
    })		
			  
	$( '.cbp-fwslider' ).cbpFWSlider();			

	function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa-angle-right fa-angle-down');
		}
		$('.accordion').on('hidden.bs.collapse', toggleChevron);
		$('.accordion').on('shown.bs.collapse', toggleChevron);

	
});	



  