const menu = document.querySelector('.menu');
const widthToggler = document.querySelector('.header__toggler');
const iconTop = menu.querySelector('.menu__scroll-icon--position-top');
const iconBottom = menu.querySelector('.menu__scroll-icon--position-bottom');

const isOverflowedVertically = () => menu.scrollHeight > menu.clientHeight;

const setIconDisplay = (icon) => {
  icon.style.display = isOverflowedVertically() ? 'block' : 'none';
};

const onWidthToglerClick = () => {
  setIconDisplay(iconBottom);
};

const onDocumentResize = () => {
  setIconDisplay(iconBottom);
};

const onMenuScroll = () => {
  iconTop.style.display = menu.scrollTop > 0 ? 'block' : 'none';
  iconBottom.style.display = menu.scrollHeight - menu.clientHeight > menu.scrollTop ? 'block' : 'none';
};

const init = () => {
  setIconDisplay(iconBottom);
  window.addEventListener('resize', onDocumentResize);
  menu.addEventListener('scroll', onMenuScroll);
  widthToggler.addEventListener('click', onWidthToglerClick);
};

export {init};
