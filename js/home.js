$(function() {
    $('#fade').addClass('.fade-animation');
});

$(window).load(function() {
	$('#div-sections').addClass('fade-animation');
});

var frames = window.frames;

for (var i = 0; i < frames.length; i++) {
	$(frames[i]).addClass('fade-animation');
}



$(window).scroll(function(){
	$('.fadeMeOut').each( function(i){
        var boxFade = $(this).offset().top + $(this).height()/4;

        /* If the object is completely visible out the window, fade it out */
        if ($(window).scrollTop() >= boxFade) {
        	$(this).stop().fadeTo('fast',0);
        }else {
        	$(this).stop().fadeTo('fast',1);
        }


       
     });    
});






























