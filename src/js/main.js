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

  // Эффект "докручивания" планет при клике (добавляем 315° к hover-смещению)
  let moonSpins = 0;
  let earthSpins = 0;
  
  const moonBtn = document.querySelector('.slider-nav--moon');
  const moonImg = document.querySelector('.moon-image');
  if (moonBtn && moonImg) {
      moonBtn.addEventListener('click', () => {
          moonSpins -= 360; // Полный оборот назад относительно нуля (hover применяет -45 поверх этого)
          moonImg.style.setProperty('--base-spin', `${moonSpins}deg`);
      });
  }

  const earthBtn = document.querySelector('.slider-nav--earth');
  const earthImg = document.querySelector('.earth-image');
  if (earthBtn && earthImg) {
      earthBtn.addEventListener('click', () => {
          earthSpins += 360; // Полный оборот вперед
          earthImg.style.setProperty('--base-spin', `${earthSpins}deg`);
      });
  }
});
