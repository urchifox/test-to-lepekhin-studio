const userMenu = document.querySelector('.user-menu');
const toggler = userMenu.querySelector('.user-menu__toggler');
const popup = userMenu.querySelector('.user-menu__popup');

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.user-menu__popup')) {
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
  popup.classList.toggle('user-menu__popup--is-opened');
  popup.classList.toggle('user-menu__popup--is-closed');

  if (popup.classList.contains('user-menu__popup--is-opened')) {
    document.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onEscKeydown);
  } else {
    document.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEscKeydown);
  }
}

const init = () => {
  toggler.addEventListener('click', onTogglerClick);
};

export {init};
