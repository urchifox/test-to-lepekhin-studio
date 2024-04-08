const statusSettings = new Map([
  ['status-online', {
    color: 'rgba(34, 197, 94, 1)',
    text: 'В сети',
  }],
  ['status-dont-disturb', {
    color: 'rgb(197, 34, 34)',
    text: 'Не беспокоить',
  }]
]);

const header = document.querySelector('.header__wrapper');
const statusMenu = header.querySelector('.status-menu');
const text = statusMenu.querySelector('.status-menu__current');
const toggler = statusMenu.querySelector('.status-menu__toggler');
const popup = document.querySelector('.status-menu__popup');

const setMaxWidth = () => {
  const headerRect = header.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();
  const screenWidth = window.screen.width;
  const distance = popupRect.left - headerRect.left;
  const maxWidth = screenWidth - distance - 24;

  popup.style.maxWidth = `${maxWidth}px`;
};

const onStatusChange = (evt) => {
  const status = statusSettings.get(evt.target.id);
  toggler.style.setProperty('--icon-color',status.color);
  text.textContent = status.text;
};

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.status-menu__popup')) {
    togglePopup();
  }
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    togglePopup();
  }
};

const onTogglerClick = (evt) => {
  evt.stopPropagation();
  togglePopup();
};


function togglePopup () {
  popup.classList.toggle('status-menu__popup--is-opened');
  popup.classList.toggle('status-menu__popup--is-closed');

  if (popup.classList.contains('status-menu__popup--is-opened')) {
    document.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscKeydown);
    popup.addEventListener('change', onStatusChange);
  } else {
    document.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscKeydown);
    popup.removeEventListener('change', onStatusChange);
  }
}

const init = () => {
  setMaxWidth();
  toggler.addEventListener('click', onTogglerClick);
};

export {init};
