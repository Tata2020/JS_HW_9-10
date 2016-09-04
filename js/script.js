$(function() {
//	jQuery carousel Swiper   
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 400,
        loop: true,
        speed: 600,
        effect: 'fade'
    });

// jQuery marcj selectBox

$('select').selectBox({
    menuTransition: 'fade',
    keepInViewport: false,
    bottomPositionCorrelation: -3,
    menuSpeed: 'slow'
});


// Drop down menu
    jQuery.fx.interval = 200;
    $('a').on('click', function(e){
    e.preventDefault();
    });

    $('.menu__item--branch').hover (
    	function() {
    	 $(this).find('.submenu__level1').slideDown();
    	 $(this).find('.triagle').removeClass('triagle');
    	 jQuery.fx.off = false;
    	},
        function() {
    	 $(this).find('.submenu__level1').slideUp();
    	 $(this).children('.menu__link').addClass('triagle');
    	 jQuery.fx.off = true;
    	}
     );

	$('.menu__item--branch1').hover (function() {
    	 $(this).find('.triagle1').removeClass('triagle1');
    	 $(this).find('.submenu__level2').animate ({
    	 	opacity: 'toggle',
    	 	width: 'toggle'
    	 }, {
    		duration: 500, 
    		specialEasing: {
      			opacity: 'linear',
      			width: 'swing'
      		}
      	});
    	}, 
    	function() {
    	 $(this).children('.submenu__link').addClass('triagle1');
    	 $(this).find('.submenu__level2').fadeOut();
    	}
    );
// Color link (border + text)
	$('.submenu__link').hover (
	  function () {
		$(this).animate({
			borderBottomColor: '#08072d',
			color: '#08072d'
		}, 500 );
	  },
	  function () {
		$(this).animate({
			borderBottomColor:'#fff',
			color: '#fff'
	    }, 500 );
	});
// Color background submenu (level 1)
	$('.submenu__item').mouseenter (function () {
		$(this).animate({
			backgroundColor: '#494C6D'
	    }, 500 );
	});

	$('.submenu__item').mouseleave (function () {
		$(this).animate({
			backgroundColor: '#62638E'
	    }, 500 );
	});

// Color background submenu (level 2)
	$('.submenu__level2 >.submenu__item').mouseenter (function () {
		$(this).animate({
			backgroundColor: '#6568CE'
	    }, 500 );
	});

 	$('.submenu__level2 >.submenu__item').mouseleave (function () {
		$(this).animate({
			backgroundColor: '#494C6D'
	    }, 500 );
	});

//Block checkboxs by JQuery
	//load page
	$('.box__input').each (
	function() {
	  var $container = $(this);
	  var $elInput = $container.find('input');
	  if ($elInput.prop("checked")) {
	    $container.css('background-position', '-48px -24px');
	  }
	return true;
	});
    
	//mousedown
	$('.box__input').mousedown (
      function () {
      	if (!$(this).find('input').prop("checked")) {
		  $(this).css('background-position', '-48px -24px');
		  $(this).find('input').prop('checked', true); 
		} else {
		  $(this).css('background-position', '0 0');	
		  $(this).find('input').prop('checked', false);
		};
		return true;
      });
});