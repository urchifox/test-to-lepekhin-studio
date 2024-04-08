import {toggleMenuWidth} from './header';

const header = document.querySelector('.header__wrapper');
const input = header.querySelector('.search-form__input');

const onInputActivation = () => {
  if (header.classList.contains('header__wrapper--closed')) {
    toggleMenuWidth();
  }
};

const init = () => {
  input.addEventListener('click', onInputActivation);
  input.addEventListener('input', onInputActivation);
};

export {init};
