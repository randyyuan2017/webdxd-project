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