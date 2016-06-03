var menuOpened = false;
var debugMode = false;

$('.menu-control').click(function(event){
	if(menuOpened ==false){
		// $('.body').addClass('menu-open');
		$('.side-menu').addClass('side-menu-appear-menu');
		$('.all').addClass('side-menu-appear-body');
		$('.fa').removeClass('fa-bars');
		$('.fa').addClass('fa-times');
		menuOpened = true;
	}else{
		// $('.body').removeClass('menu-open');
		$('.side-menu').removeClass('side-menu-appear-menu');
		$('.all').removeClass('side-menu-appear-body');
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
$('.parallax__layer--back').append('<div class="shape-map"><svg class="shape triangle"><polygon class="color" points="0,0 50,87 100,0"/></svg><svg class="shape circle-one"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape c-two"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape square"><polygon class="color" points="40,40 60,40 60,60 40,60"/></svg><svg class="shape hexagon"><polygon class="color" points="27,7 73,7 100,50 73,93 27,93 0,50"/></svg><svg class="shape arrow"><polygon class="color" points="18,0 100,60 0,60 82,0 50,100"/></svg></div>');
}


var mainbottom = $('.head-bar').offset().top + $('.head-bar').height();
$('.parallax').scroll(function() {
    var stop = Math.round($('.parallax').scrollTop());
    if (stop > mainbottom) {
        $('.nav').addClass('past-main');
    } else {
        $('.nav').removeClass('past-main');
    }
});


$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    $('.parallax').stop().animate({
        'scrollTop': $(this.hash).offset().top+$('.parallax').scrollTop()-75
    }, 900, 'swing');
});