import {isOverflowedVertically} from './utils';
import {onMenuScroll} from './animation-manager';

const menu = document.querySelector('.menu');
const iconTop = menu.querySelector('.menu__scroll-icon--position-top');
const iconBottom = menu.querySelector('.menu__scroll-icon--position-bottom');

const init = () => {
  iconTop.style.opacity = 0;
  iconBottom.style.opacity = isOverflowedVertically(menu) ?
    1 :
    0;
  menu.addEventListener('scroll', onMenuScroll);
};

export {init};
