// var mainbottom = $('#main').offset().top + $('#main').height();
var menuOpened = false;
var debugMode = false;

$('.menu-control').click(function(event){
	if(menuOpened ==false){
		// $('.body').addClass('menu-open');
		$('.side-menu').addClass('side-menu-appear');
		$('.fa').removeClass('fa-bars');
		$('.fa').addClass('fa-times');
		menuOpened = true;
	}else{
		// $('.body').removeClass('menu-open');
		$('.side-menu').removeClass('side-menu-appear');
		$('.fa').removeClass('fa-times');
		$('.fa').addClass('fa-bars');
		menuOpened = false;
	}
});
$('.debug').click(function(event){
	if(debugMode==false){
		$('.all').addClass('transform');
		debugMode=true;
	}else
	{
		$('.all').removeClass('transform');
		debugMode=false;
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