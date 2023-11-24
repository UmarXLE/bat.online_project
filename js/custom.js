(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // Owl Carousel
    $('.owl-carousel-intro').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })

    //reviews - carouserl
  $(".owl-carousel-reviews").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      680: {
        items: 2,
        nav: false,
        loop: false
      },
      1000: {
        items: 3,
        nav: true
      }
    }})
    // PARALLAX EFFECT
    $.stellar();
    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });
    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);


// Timer
let targetDate = new Date(localStorage.getItem('targetDate'));

if (!targetDate || targetDate < new Date()) {
  const duration = 24 * 60 * 60 * 1000;
  targetDate = new Date(new Date().getTime() + duration);
  localStorage.setItem('targetDate', targetDate.toISOString());
}

const countdownElement = document.getElementById('countdown');
updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const remainingTime = calculateRemainingTime(timeDifference);
    countdownElement.innerHTML = remainingTime;
  } else {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = 'Product has run out!';
  }
}

function calculateRemainingTime(timeDifference) {
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return `${hours}:${minutes}:${seconds}`;
}

