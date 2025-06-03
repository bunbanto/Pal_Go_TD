import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation]);

let swiper = null;

function domSwiper() {
  const isMobile = window.matchMedia('(max-width: 1199.98px)').matches;

  if (isMobile && !swiper) {
    swiper = new Swiper('#dom-swiper', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.dom-end',
        prevEl: '.dom-start',
      },
      spaceBetween: 20,
    });
  } else if (!isMobile && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

window.addEventListener('load', domSwiper);
window.addEventListener('resize', domSwiper);
