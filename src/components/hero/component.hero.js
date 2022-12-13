import Swiper, { Pagination } from 'swiper';

export default function hero() {
  const hero = document.querySelector('.hero');
  const popup = document.querySelector('.form-popup');
  console.log(popup);
  console.log('Скрипт работает');
  Swiper.use([Pagination]);
  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      clickableClass: '.pag-active',
    },
  });
  hero.addEventListener('click', (e) => {
    console.log('работает');
    if (e.target.classList.contains('open-from-popup')) {
      console.log('точно работает');
      popup.classList.add('popup-open');
      setTimeout(() => {
        popup.classList.add('popup-vis');
      }, 0);
      const firstWidth = document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      const seconWidth = document.documentElement.clientWidth;
      document.body.style.paddingRight = `${seconWidth - firstWidth}px`;
    }
  });

  popup.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('form-popup') ||
      e.target.classList.contains('form-popup-remove')
    ) {
      console.log('lol');
      popup.classList.remove('popup-vis');
      popup.classList.remove('popup-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  });
}
