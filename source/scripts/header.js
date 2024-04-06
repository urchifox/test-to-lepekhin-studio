import {animateMenuResize} from './animation-manager';

const header = document.querySelector('.header');
const toggler = header.querySelector('.header__toggler');

const toggleMenuWidth = () => {
  animateMenuResize();
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
};

const onTogglerClick = () => toggleMenuWidth();

const init = () => {
  toggler.addEventListener('click', onTogglerClick);
};

export {init, toggleMenuWidth};
