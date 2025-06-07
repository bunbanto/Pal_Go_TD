// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';
// import 'swiper/css';

// Swiper.use([Navigation, Keyboard]);

// const swiper = new Swiper('#features-swiper', {
//   loop: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },

//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 104,
//     },
//   },
// });
import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Pagination, Navigation, Keyboard]);

const swiper = new Swiper('#features-swiper', {
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '[data-next="next"]',
    prevEl: '[data-prev="prev"]',

  },
 pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
