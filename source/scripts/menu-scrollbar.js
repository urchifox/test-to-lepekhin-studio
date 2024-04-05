const ANIMATION_APPEARANCE = 'appear 0.3s ease-in-out both';
const ANIMATION_DISAPPEARANCE = 'disappear 0.3s ease-in-out both';

const menu = document.querySelector('.menu');
const widthToggler = document.querySelector('.header__toggler');
const iconTop = menu.querySelector('.menu__scroll-icon--position-top');
const iconBottom = menu.querySelector('.menu__scroll-icon--position-bottom');
let isVisible;

const isOverflowedVertically = () => menu.scrollHeight > menu.clientHeight;

const setIconVisibility = (icon) => {
  if (isOverflowedVertically() !== isVisible) {
    const animation = isOverflowedVertically() ? ANIMATION_APPEARANCE : ANIMATION_DISAPPEARANCE;
    icon.style.setProperty('--scroll-icon-animation', animation);
    isVisible = isOverflowedVertically();
  }
};

const onWidthTogglerClick = () => {
  setTimeout(() => setIconVisibility(iconBottom), 300);
};

const onDocumentResize = () => {
  setIconVisibility(iconBottom);
};

const onMenuScroll = () => {
  if (menu.scrollTop > 0) {
    iconTop.style.setProperty('--scroll-icon-animation', ANIMATION_APPEARANCE);
  } else {
    iconTop.style.setProperty('--scroll-icon-animation', ANIMATION_DISAPPEARANCE);
  }

  if (menu.scrollHeight - menu.clientHeight > menu.scrollTop) {
    iconBottom.style.setProperty('--scroll-icon-animation', ANIMATION_APPEARANCE);
  } else {
    iconBottom.style.setProperty('--scroll-icon-animation', ANIMATION_DISAPPEARANCE);
  }
};

const init = () => {
  isVisible = isOverflowedVertically();
  iconTop.style.setProperty('--scroll-icon-animation', 'disappear 0s both');

  if (isOverflowedVertically()) {
    iconBottom.style.setProperty('--scroll-icon-animation', 'appear 0s both');
  } else {
    iconBottom.style.setProperty('--scroll-icon-animation', 'disappear 0s both');
  }

  window.addEventListener('resize', onDocumentResize);
  menu.addEventListener('scroll', onMenuScroll);
  widthToggler.addEventListener('click', onWidthTogglerClick);
};

export {init};
