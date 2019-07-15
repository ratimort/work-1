$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});

$(document).ready(function(){
  $(".item-in-1").click(function(){
  	$(".item-fade-1").fadeIn();
    $("body").addClass("body1")
  });
  $(".item-in-2").click(function(){
    $(".item-fade-2").fadeIn();
    $("body").addClass("body1")
  });
  $(".item-in-3").click(function(){
    $(".item-fade-3").fadeIn();
    $("body").addClass("body1")
  });
  $(".item-in-4").click(function(){
    $(".item-fade-4").fadeIn();
    $("body").addClass("body1")
  });
  $(".item-in-5").click(function(){
    $(".item-fade-5").fadeIn();
    $("body").addClass("body1")
  });
  $(".item-in-6").click(function(){
    $(".item-fade-6").fadeIn();
    $("body").addClass("body1")
  });
  $(".button-contact").click(function(){
    $(".contact-fade-1").fadeIn();
    $("body").addClass("body1")
  });
  $(".close-1, .close-2").click(function(){
    $(".item-fade").fadeOut();
    $(".slide-question").fadeOut();
    $("body").removeClass("body1")
  });
  $(".flip-1").click(function(){
    $(".arrow-1").toggleClass("turn");
  });
  $(".flip-2").click(function(){
    $(".arrow-2").toggleClass("turn");
  });
  $(".flip-3").click(function(){
    $(".arrow-3").toggleClass("turn");
  });
  $(".flip-4").click(function(){
    $(".arrow-4").toggleClass("turn");
  });
  $(".flip-5").click(function(){
    $(".arrow-5").toggleClass("turn");
  });
  $(".click-on").click(function(){
      $(".slide-menu").slideToggle("slow");
      $("body").toggleClass("body1");
      $(".line-1").toggleClass("line-1x");
      $(".line-2").toggleClass("line-2x");
  });
  $(".question-in").click(function(){
    $(".slide-question").fadeIn();
    $("body").addClass("body1")
  });
  $(".menu-fade").click(function(){
      $(".scroll-menu").addClass('menu-fade-slide');
  });
  $(".close-1").click(function(){
      $(".scroll-menu").removeClass('menu-fade-slide');
  });
  $(window).on('load', function () {
      var $preloader = $('#loading'),
          $loader   = $preloader.find('.loader');
      $loader.fadeOut();
      $preloader.delay(500).fadeOut('slow');
  });
});

 $(window).scroll(function(){
         if ($(this).scrollTop() >= 10) {
             $('.scroll-menu').addClass('style-menu');
          } else {
             $('.scroll-menu').removeClass('style-menu');
          }
      });
$(".prevent").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

// function myFunction() {
//    var element = document.getElementById("arrow");
//    element.classList.toggle("turn");
// }


var acc = document.getElementsByClassName("flip");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();