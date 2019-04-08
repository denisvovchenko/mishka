let navToggle = document.querySelector('.js-nav__toggle');
let navList = document.querySelector('.js-nav__list');

navToggle.addEventListener('click', e => {
  e.preventDefault();

  navList.classList.toggle('nav__list--show');
  navToggle.classList.toggle('nav__toggle--close');
});
