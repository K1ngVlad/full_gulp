// import img from './assess/svg/header-logo.svg'

export default function header() {
  const burgerBtn = document.querySelector('.burger-logo');
  const burger = document.querySelector('.burger');
  const burgerRemove = document.querySelector('.burger-remove');
  const searchBtn = document.querySelector('.search-icon');
  const search = document.querySelector('.search-block');
  const searchRemove = document.querySelector('.search-close');

  burgerBtn.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
  });

  burgerRemove.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
  });
  searchBtn.addEventListener('click', () => {
    console.log('click');
    search.classList.toggle('search-block-active');
  });
  searchRemove.addEventListener('click', () => {
    search.classList.toggle('search-block-active');
  });
}
