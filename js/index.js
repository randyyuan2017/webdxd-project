var menuOpened = false;
$('.menu-control').click(function(event){
	if(menuOpened ==false){
		$('.body').addClass('menu-open');
		menuOpened = true;
	}else{
		$('.body').removeClass('menu-open');
		menuOpened = false;
	}
});