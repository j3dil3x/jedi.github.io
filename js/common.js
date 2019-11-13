jQuery(function(){
  new WOW().init();
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $('.slick-dots').click(function() {
      $('.slick-active').removeClass('slick-button');
    });

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if(nextSlide == 1){
        $('header ul li').css({'color' : 'white', 'text-shadow': 'black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0'});
      }else if(currentSlide == 1 || currentSlide == 2){
        $('header ul li').css({'color' : 'black', 'text-shadow': 'white 1px 1px 0, white -1px -1px 0, white -1px 1px 0, white 1px -1px 0'});
      }
  });
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if(nextSlide == 2){
      $('.slick-button').css({'color' : 'black', 'border-color' : 'black'});
      $('.list').css({'color' : 'black', 'border-color' : 'black'});
      $('.listP div').css({'color' : 'black', 'border-color' : 'black'});
    }else if(currentSlide == 0 || currentSlide == 1 || nextSlide == 1 || nextSlide == 0){
      $('.slick-button').css({'color' : 'white', 'border-color' : 'white'});
      $('.list').css({'color' : 'white', 'border-color' : 'white'});
      $('.listP div').css({'color' : 'white', 'border-color' : 'white'});
    }
});



$('.slider2').slick({
  variableWidth: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 200,
  pauseOnFocus: false,
  pauseOnHover: false,
});
let height = $(window).height() + 20;
let heightEco = (height - height * 0.2);
let width = $(window).width();
// $('.slider2').css({'max-width' : `${$(window).width() - 500}px`});
// $(window).resize(function(){
  $('.slider2').css({'max-width' : `${$(window).width() - 500}px`});
// });
$('section').css({'height' : `${$(window).height()}px`});
$('.slide').css({'height' : `${$(window).height()}px`});
$('.slide p').css({'height' : `${$(window).height()}px`});
// $('.ecoProblems').css({'height' : `${heightEco}px`});
$(window).resize(function(){
  $('section').css({'height' : `${$(window).height()}px`});
  $('.slide').css({'height' : `${$(window).height()}px`});
});
//
// let waypoint = new Waypoint({
//   element: $('.wrap'),
//   handler: function(direction) {
//     console.log('ok ' + direction);
//     if(direction == "down"){
//       $('.slider2').addClass('slideInRight animated');
//       $('.ecoProblems').addClass('slideInLeft animated');
//     }else if (direction == "up"){
//       $('.ecoProblems').removeClass('slideInLeft');
//       $('.slider2').removeClass('slideInRight');
//     };
//   },
//   offset:'300px',
// });
$('.wrap').Lazy();
$('.wrap0').Lazy();
$('.wrap2').Lazy();
$(".list1").click(function(){
$(".wrap0").slideDown(function(){
  $('.slider').slick('slickPlay');
  $('.moreInfo2').hide();
  $('.list2').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
  $('.list1').css({'width':'40px', 'height':'40px', 'font-size' : '24px'});
  $('.list3').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap2").slideUp();
$(".wrap").slideUp();
});
$(".moreInfo").click(function(){
$(".wrap").slideToggle(function(){
  $('.list2').css({'width':'40px', 'height':'40px', 'font-size' : '24px'});
  $('.list1').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
  $('.list3').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap0").slideToggle();
});
$(".list2").click(function(){
$(".wrap").slideDown(function(){
  $('.list2').css({'width':'40px', 'height':'40px', 'font-size' : '24px'});
  $('.list1').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
  $('.list3').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap0").slideUp();
$(".wrap2").slideUp();
});
$(".moreInfo2").click(function(){
$(".wrap2").slideToggle(function(){
  $('.list3').css({'width':'40px', 'height':'40px', 'font-size' : '24px'});
  $('.list2').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
  $('.list1').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap").slideToggle();
})
$(".list3").click(function(){
$(".wrap2").slideDown(function(){
  $('.list3').css({'width':'40px', 'height':'40px', 'font-size' : '24px'});
  $('.list2').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
  $('.list1').css({'width':'30px', 'height':'30px', 'font-size' : '18px'});
});
$(".wrap").slideUp();
$(".wrap0").slideUp();
})

$('.moreInfo').click(function(){
  $('.list').css({'color' : 'white', 'border-color' : 'white'})
  $('.listP div').css({'color' : 'white', 'border-color' : 'white'})
  $('.moreInfo').hide();
  $('.moreInfo2').show();
  $('.slider').slick('slickPause');
})
$('.moreInfo2').click(function(){
  $('.list').css({'color' : 'white', 'border-color' : 'white'})
    $('.list div').css({'color' : 'white', 'border-color' : 'white'})
  $('.moreInfo2').hide();
  $('.slider').slick('slickPause');
})
});
$('.list2').click(function(){
  $('.list').css({'color' : 'white', 'border-color' : 'white'})
  $('.listP div').css({'color' : 'white', 'border-color' : 'white'})
  $('.moreInfo2').show();
  $('.moreInfo').hide();
  $('.slider').slick('slickPause');
});
$('.list1').click(function(){
  if($('.slider').slick('slickCurrentSlide') == '2' ){
    $('.list').css({'color' : 'black', 'border-color' : 'black'});
    $('.listP div').css({'color' : 'black', 'border-color' : 'black'});
  }else{
    $('.list').css({'color' : 'white', 'border-color' : 'white'});
    $('.listP div').css({'color' : 'white', 'border-color' : 'white'});
  }
  $('.moreInfo').show();
  $('.moreInfo2').hide();
  $('.slider').slick('slickPlay');
});
$('.list3').click(function(){
  $('.list').css({'color' : 'white', 'border-color' : 'white'})
    $('.listP div').css({'color' : 'white', 'border-color' : 'white'})
  $('.moreInfo').hide()
  $('.moreInfo2').hide()
  $('.slider').slick('slickPause');
});

$('.moreInfo').click(function(){
  $('header').css({'display': 'none'});
});
$('.list2').click(function(){
  $('header').css({'display': 'none'});
});
$('.list3').click(function(){
  $('header').css({'display': 'none'});
});
$('.list1').click(function(){
  $('header').css({'display': 'flex'});
});
