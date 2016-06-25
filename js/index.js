var myAppRef = new Firebase("https://relcreative.firebaseio.com/");

var letterRef = new Firebase("https://relcreative.firebaseio.com/letter")

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
		$('.parallax__layer').addClass('parallax-border');
		$('.parallax__layer--front').addClass('parallax-green');
		$('.parallax__layer--base').addClass('parallax-red');
		$('.parallax__layer--back').addClass('parallax-blue');
		debugMode=true;
	}else
	{
		$('.all').removeClass('transform');
		$('.parallax__layer').removeClass('parallax-border');
		$('.parallax__layer--front').removeClass('parallax-green');
		$('.parallax__layer--base').removeClass('parallax-red');
		$('.parallax__layer--back').removeClass('parallax-blue');
		debugMode=false;
	}
});

myAppRef.child("letter").on("value", function(snapshot) {
  var letterList = snapshot.val();
  $('.data-row').remove();
  for (var key in letterList) {
    var currentTr = $('<tr>').addClass('data-row').attr('id', key).appendTo('.table');
    $('<td>').text(letterList[key].content).appendTo(currentTr);
    $('<td>').text(letterList[key].date).appendTo(currentTr);
    $('<td>').html('<button class="removeLetter"><i class="fa fa-times"></i></button>').appendTo(currentTr);
  }
});
$('.table').on('click','.removeLetter',function(event){
    var buttonClicked = event.target;
    var currentUser = new Firebase("https://relcreative.firebaseio.com/letter/" + $(buttonClicked).parent().parent().parent().attr('id'));
    currentUser.remove();
});
for(var i=0; i<1;i++){
$('.parallax__layer--back').append('<div class="shape-map"><svg class="shape triangle"><polygon class="color" points="0,0 50,87 100,0"/></svg><svg class="shape triangle-two"><polygon class="color" points="0,0 50,87 100,0"/></svg><svg class="shape triangle-three"><polygon class="color" points="0,0 50,87 100,0"/></svg><svg class="shape triangle-four"><polygon class="color" points="0,0 50,87 100,0"/></svg><svg class="shape circle-one"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape circle-two"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape circle-three"><circle class="color" cx="50" cy="50" r="30"></svg><svg class="shape circle-four"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape c-two-one"><circle class="color" cx="50" cy="50" r="40"></svg><svg class="shape square-one"><polygon class="color" points="40,40 60,40 60,60 40,60"/></svg><svg class="shape c-two-two"><circle class="color" cx="50" cy="50" r="35"></svg><svg class="shape square-two"><polygon class="color" points="40,40 60,40 60,60 40,60"/></svg><svg class="shape c-two-three"><circle class="color" cx="50" cy="50" r="25"></svg><svg class="shape square-three"><polygon class="color" points="40,40 60,40 60,60 40,60"/></svg><svg class="shape c-two-four"><circle class="color" cx="50" cy="50" r="20"></svg><svg class="shape square-four"><polygon class="color" points="40,40 60,40 60,60 40,60"/></svg><svg class="shape hexagon-one"><polygon class="color" points="27,7 73,7 100,50 73,93 27,93 0,50"/></svg><svg class="shape hexagon-two"><polygon class="color" points="27,7 73,7 100,50 73,93 27,93 0,50"/></svg><svg class="shape hexagon-three"><polygon class="color" points="27,7 73,7 100,50 73,93 27,93 0,50"/></svg><svg class="shape hexagon-four"><polygon class="color" points="27,7 73,7 100,50 73,93 27,93 0,50"/></svg><svg class="shape star-one"><polygon class="color" points="18,0 100,60 0,60 82,0 50,100"/></svg><svg class="shape star-two"><polygon class="color" points="18,0 100,60 0,60 82,0 50,100"/></svg><svg class="shape star-three"><polygon class="color" points="18,0 100,60 0,60 82,0 50,100"/></svg><svg class="shape star-four"><polygon class="color" points="18,0 100,60 0,60 82,0 50,100"/></svg></div>');
}

$('.click-animation').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    $('.parallax').stop().animate({
        'scrollTop': $(this.hash).offset().top+$('.parallax').scrollTop()-75
    }, 900, 'swing');
});

$('#team-logo').on('click',function () {
    var target = this.hash;
    $('.parallax').stop().animate({
        'scrollTop': 0}, 900, 'swing');
});

$('.parallax').scroll(function(){
    $('.waterfall').each( function(i){
       var boxFade = $(this).offset().top -$('.parallax').height() + $(this).height()/2;
       if ($(window).scrollTop() >= boxFade) {
           $(this).stop().fadeTo('fast',1);
       }else {
           $(this).stop().fadeTo('fast',0);
       }
    });    
});

var mainbottom = $('.head-bar').offset().top + $('.head-bar').height();
var randyTop = $('#randy-photo').offset().top -$('.parallax').height() + $('#randy-photo').height()*0.55;
var randyBottom = $('#randy-photo').offset().top -$('.parallax').height() + $('#randy-photo').height()*1.5;
var elevenTop = $('#eleven-photo').offset().top -$('.parallax').height() + $('#eleven-photo').height()*0.55;
var elevenBottom = $('#eleven-photo').offset().top -$('.parallax').height() + $('#eleven-photo').height()*1.5;
var leonTop = $('#leon-photo').offset().top -$('.parallax').height() + $('#leon-photo').height()*0.85;
var leonBottom = $('#leon-photo').offset().top -$('.parallax').height() + $('#leon-photo').height()*1.1;

$('.parallax').scroll(function() {
    var stop = Math.round($('.parallax').scrollTop());
    if (stop > mainbottom) {
        $('.nav').addClass('past-main');
        $('#team-logo').removeClass('invisibility');
        $('#team-logo').addClass('visibility');
    } else {
        $('.nav').removeClass('past-main');
        $('#team-logo').addClass('invisibility');
        $('#team-logo').removeClass('visibility');
    }

    if (stop < randyTop){
        $('#randy-photo').attr("src","img/randy-up.png");
    }else{
        $('#randy-photo').attr("src","img/randy.png");
    }


    if (stop < elevenTop){
        $('#eleven-photo').attr("src","img/eleven-up.png");
    }else{
        $('#eleven-photo').attr("src","img/eleven.png");
    }

    if (stop < leonTop){
        $('#leon-photo').attr("src","img/leon-up.png");
    }else{
        $('#leon-photo').attr("src","img/leon.png");
    }

    if ((stop > randyTop) && (stop < randyBottom)){
        $('#randy-intro').removeClass('invisibility');
        $('.randy-button').removeClass('invisibility');
    }else{
        $('#randy-intro').addClass('invisibility');
        $('.randy-button').addClass('invisibility');
    }

    if ((stop > elevenTop) && (stop < elevenBottom)){
        $('#eleven-intro').removeClass('invisibility');
    }else{
        $('#eleven-intro').addClass('invisibility');
    }

    if ((stop > leonTop) && (stop < leonBottom)){
        $('#leon-intro').removeClass('invisibility');
    }else{
        $('#leon-intro').addClass('invisibility');
    }
});

$('.send').click(function(event){
var d = new Date();
var date = d.getFullYear() + '/' +
    ((''+(d.getMonth()+1)).length<2 ? '0' : '') + (d.getMonth()+1) + '/' +
    ((''+d.getDate()).length<2 ? '0' : '') + d.getDate();
var letter={
    content: $('.full-letter').val(),
    date: date
};
letterRef.push(letter);
$('.send').text('Letter sent!');
$('.send').prop('disabled', true);
$(".full-letter").attr("disabled","disabled"); 
});