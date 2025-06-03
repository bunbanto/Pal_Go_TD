import Swiper from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null;

function setStaticView(isStatic) {
  const swiperEl = document.querySelector('.swiper-wrapper');
  if (!swiperEl) return;
  if (isStatic) {
    swiperEl.classList.add('static-view');
  } else {
    swiperEl.classList.remove('static-view');
  }
}

function initSwiper() {
  const isMobile = window.innerWidth < 1200;

  if (isMobile && !swiperInstance) {
    setStaticView(false);
    swiperInstance = new Swiper('.swiper', {
      loop: true,
      modules: [Pagination, Keyboard],
      slidesPerView: 1,
      spaceBetween: 20,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (!isMobile && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
    setStaticView(true);
  } else if (!isMobile) {
    setStaticView(true);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
  window.addEventListener('resize', initSwiper);
});
