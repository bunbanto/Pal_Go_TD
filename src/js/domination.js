import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 500,
    },
  },
});

let swiper;
const initSwiper = () => {
  if (window.innerWidth > 1200) {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  }
};

window.addEventListener('resize', initSwiper);
initSwiper();
