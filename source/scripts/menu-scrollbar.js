const menu = document.querySelector('.menu');
const widthToggler = document.querySelector('.header__toggler');
const iconTop = menu.querySelector('.menu__scroll-icon--position-top');
const iconBottom = menu.querySelector('.menu__scroll-icon--position-bottom');

const isOverflowedVertically = () => menu.scrollHeight > menu.clientHeight;

const setIconOpacity = (icon) => {
  icon.style.opacity = Number(isOverflowedVertically());
};

const onWidthToglerClick = () => {
  setIconOpacity(iconBottom);
};

const onDocumentResize = () => {
  setIconOpacity(iconBottom);
};

const onMenuScroll = () => {
  iconTop.style.opacity = Number(menu.scrollTop > 0);
  iconBottom.style.opacity = Number(menu.scrollHeight - menu.clientHeight > menu.scrollTop);
};

const init = () => {
  setIconOpacity(iconBottom);
  window.addEventListener('resize', onDocumentResize);
  menu.addEventListener('scroll', onMenuScroll);
  widthToggler.addEventListener('click', onWidthToglerClick);
};

export {init};
