import {animateMenuResize} from './animation-manager';

const header = document.querySelector('.header__wrapper');
const toggler = header.querySelector('.header__toggler');

const toggleMenuWidth = () => {
  animateMenuResize();
  header.classList.toggle('header__wrapper--closed');
  header.classList.toggle('header__wrapper--opened');
};

const onTogglerClick = () => toggleMenuWidth();

const init = () => {
  toggler.addEventListener('click', onTogglerClick);
};

export {init, toggleMenuWidth};
