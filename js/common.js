$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".main-mnu").slideToggle();
	  return false;
	});

	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});


	$(document).on('click', 'a[href^="#"]', function(e) {
    	// target element id
    	var id = $(this).attr('href');
    
    	// target element
    	var $id = $(id);
    	if ($id.length === 0) {
        	return;
   	 }
    
    	// prevent standard hash navigation (avoid blinking in IE)
    	e.preventDefault();
    
    	// top position relative to the document
    	var pos = $(id).offset().top;
    
    	// animated top scrolling
    	$('body, html').animate({scrollTop: pos}, 2000);
	});
	
});

