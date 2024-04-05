const ANIMATION_APPEARANCE = 'appear 0.3s ease-in-out both';
const header = document.querySelector('.header');
const input = header.querySelector('.search-form__input');

const onInputActivation = () => {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
    document.documentElement.style.setProperty('--animation', ANIMATION_APPEARANCE);
  }
};

const init = () => {
  input.addEventListener('click', onInputActivation);
  input.addEventListener('input', onInputActivation);
};

export {init};
