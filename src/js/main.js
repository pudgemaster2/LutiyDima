// Главный файл скриптов
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

console.log('Vite Vanilla Starter загружен и работает успешно!');

const initSwiper = () => {
    const swiper = new Swiper('.main-slider', {
        modules: [Navigation, Pagination],
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
  // Пример простого Vanilla JS (подсветка активной ссылки в шапке)
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
          e.preventDefault(); // отменяем переход по пустой ссылке
      }
      
      navLinks.forEach(l => l.classList.remove('header__nav-link--active'));
      this.classList.add('header__nav-link--active');
    });
  });
});
