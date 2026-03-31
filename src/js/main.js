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

const initModals = () => {
    // Время анимации из CSS (0.3s)
    const ANIMATION_TIME = 300; 

    // Выносим логику закрытия в отдельную функцию, чтобы не дублировать
    const closeModal = (modal) => {
        modal.classList.remove('modal--open');
        
        // Ждем, пока модалка исчезнет, прежде чем возвращать скроллбар
        setTimeout(() => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = ''; // Убираем отступ
        }, ANIMATION_TIME);
    };

    document.body.addEventListener('click', (e) => {
        // Открытие модалки
        const openBtn = e.target.closest('[data-modal-open]');
        if (openBtn) {
            e.preventDefault();
            const modalId = openBtn.getAttribute('data-modal-open');
            const modal = document.getElementById(modalId);
            if (modal) {
                // Вычисляем ширину скроллбара и компенсируем упущенное пространство
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.paddingRight = `${scrollbarWidth}px`;

                modal.classList.add('modal--open');
                document.body.style.overflow = 'hidden'; // Блокируем скролл фона
            }
        }

        // Закрытие по крестику
        const closeBtn = e.target.closest('[data-modal-close]');
        if (closeBtn) {
            e.preventDefault();
            const modal = closeBtn.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        }

        // Закрытие по клику на фон (overlay)
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
  initModals();
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
