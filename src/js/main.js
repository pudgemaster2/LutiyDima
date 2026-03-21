// Главный файл скриптов

console.log('Vite Vanilla Starter загружен и работает успешно!');

document.addEventListener('DOMContentLoaded', () => {
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
