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

var boxFadeTop1 = $('#box-fade1').offset().top + $('#box-fade1').height()/3;
var boxFadeTop2 = $('#box-fade2').offset().top + $('#box-fade2').height()/3;
var boxFadeTop3 = $('#box-fade3').offset().top + $('#box-fade3').height()/3;
var boxFadeTop4 = $('#box-fade4').offset().top + $('#box-fade4').height()/3;
var boxFadeTop5 = $('#box-fade5').offset().top + $('#box-fade5').height()/3;
var boxFadeTop6 = $('#box-fade6').offset().top + $('#box-fade6').height()/3;
var boxFadeTop7 = $('#box-fade7').offset().top + $('#box-fade7').height()/2;



$(window).scroll(function() {
	if ($(window).scrollTop() >= boxFadeTop1) {
		$('#box-fade1').stop().fadeTo(5,0);
	}else {
		$('#box-fade1').stop().fadeTo(10,1);
	}
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= boxFadeTop2) {
		$('#box-fade2').stop().fadeTo(5,0);
	}else {
		$('#box-fade2').stop().fadeTo(10,1);
	}
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= boxFadeTop3) {
		$('#box-fade3').stop().fadeTo(5,0);
	}else {
		$('#box-fade3').stop().fadeTo(10,1);
	}
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= boxFadeTop4) {
		$('#box-fade4').stop().fadeTo(5,0);
	}else {
		$('#box-fade4').stop().fadeTo(10,1);
	}
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= boxFadeTop5) {
		$('#box-fade5').stop().fadeTo(5,0);
	}else {
		$('#box-fade5').stop().fadeTo(10,1);
	}
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= boxFadeTop6) {
		$('#box-fade6').stop().fadeTo(5,0);
	}else {
		$('#box-fade6').stop().fadeTo(10,1);
	}
});

$(window).scroll(function() {
	if ($(window).scrollTop() >= boxFadeTop7) {
		$('#box-fade7').stop().fadeTo(5,0);
	}else {
		$('#box-fade7').stop().fadeTo(10,1);
	}
});



























