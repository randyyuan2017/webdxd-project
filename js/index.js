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
for(var i=0; i<1;i++){
$('.parallax__layer--back').append('<div class="shape-map"><svg class="shape triangle"><polygon class="color" points="0,0 50,87 100,0"/></svg><svg class="shape circle-one"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape c-two"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape square"><polygon class="color" points="40,40 60,40 60,60 40,60"/></svg><svg class="shape hexagon"><polygon class="color" points="27,7 73,7 100,50 73,93 27,93 0,50"/></svg><svg class="shape arrow"><polygon class="color" points="50,0 30,80 50,0 70,80"/></svg></div>');
}
// $(window).on('scroll',function(){
//     var stop = Math.round($(window).scrollTop());

//     if (stop > mainbottom) {
//         $('').addClass('past-main');
//     } else {
//         $('.nav').removeClass('past-main');
//     }

// });