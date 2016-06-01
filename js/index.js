// var mainbottom = $('#main').offset().top + $('#main').height();
var menuOpened = false;


$('.menu-control').click(function(event){
	if(menuOpened ==false){
		$('.body').addClass('menu-open');
		$('.fa').removeClass('fa-bars');
		$('.fa').addClass('fa-times');
		menuOpened = true;
	}else{
		$('.body').removeClass('menu-open');
		$('.fa').removeClass('fa-times');
		$('.fa').addClass('fa-bars');
		menuOpened = false;
	}
});


// $(window).on('scroll',function(){
//     var stop = Math.round($(window).scrollTop());

//     if (stop > mainbottom) {
//         $('').addClass('past-main');
//     } else {
//         $('.nav').removeClass('past-main');
//     }

// });