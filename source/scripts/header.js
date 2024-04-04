const ANIMATION_APPEARANCE = 'appear 3s ease-in-out both';
const ANIMATION_DISAPPEARANCE = 'disappear 3s ease-in-out both';
const header = document.querySelector('.header');
const button = header.querySelector('.header__toggler');
const input = header.querySelector('.search-form__input');

const onButtonClick = () => {
  if (header.classList.contains('header--closed')) {
    document.documentElement.style.setProperty('--animation', ANIMATION_APPEARANCE);
  } else {
    document.documentElement.style.setProperty('--animation', ANIMATION_DISAPPEARANCE);
  }

  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
  input.value = '';
};

const init = () => {
  button.addEventListener('click', onButtonClick);
};

export {init};
