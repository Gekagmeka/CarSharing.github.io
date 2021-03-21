//navigation (add/remove class)
var navigation = document.querySelector('.nav');
var burger_menu = document.querySelector('.burger-menu');
var body_main = document.querySelector('body');

burger_menu.onclick = function() {
   navigation.classList.toggle('active');
   body_main.classList.toggle('locked');
}


//swiper
new Swiper('.swiper', {
   
   //pagination - dots of the swiper
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      //type: 'fraction',//number of the slides but not the bullets
      // dynamicBullets: true,
   },

   // direction: 'vertical', //automatically there will be direction for dots
   
   // autoplay: true,
   // or
   // autoplay: { // autoplay: false,
   //    delay: 3000, // bad work with effect: 'fade'
   //    reverseDirection: true
   // },

   //replacing the slides, but neet to add fadeEffect
   // effect: 'fade',
   // fadeEffect: {
   //    crossFade: true
   // },

   //flip effect
   // effect: 'flip',
   // flipEffect: {
   //    slideShadows: false,
   //    limitRotation: true
   // },

   // Responsive breakpoints
  breakpoints: {
   // when window width is >= 320px
   320: {
   //   slidesPerView: 2,
   //   spaceBetween: 20
      // direction: false,
      direction: 'horizontal'
   },
   // when window width is >= 480px
   480: {
   //   slidesPerView: 3,
   //   spaceBetween: 30
   },
   // when window width is >= 640px
   640: {
   //   slidesPerView: 4,
   //   spaceBetween: 40
   },
   // when window width is >= 769px
   769: {
      direction: 'vertical'
    }
 }

});

// const swiper = new Swiper('.swiper-container', {
//    mousewheel: {
//      invert: true,
//    },
//  });