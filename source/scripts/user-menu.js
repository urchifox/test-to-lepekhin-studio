const userMenu = document.querySelector('.user-menu');
const toggler = userMenu.querySelector('.user-menu__toggler');
const popup = userMenu.querySelector('.user-menu__popup');

const togglePopup = () => {
  popup.classList.toggle('user-menu__popup--is-opened');
  popup.classList.toggle('user-menu__popup--is-closed');
};

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.user-menu__popup')) {
    togglePopup();
    document.removeEventListener('click', onOverlayClick);
  }
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    togglePopup();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const onTogglerClick = (evt) => {
  evt.stopPropagation();
  togglePopup();

  if (popup.classList.contains('user-menu__popup--is-opened')) {
    document.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscKeydown);
  } else {
    document.removeEventListener('click', onOverlayClick);
  }
};

const init = () => {
  toggler.addEventListener('click', onTogglerClick);
};

export {init};
