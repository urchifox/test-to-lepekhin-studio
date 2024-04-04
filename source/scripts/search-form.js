const header = document.querySelector('.header');
const input = header.querySelector('.search-form__input');

const onInputActivation = () => {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
  }
};

const init = () => {
  input.addEventListener('click', onInputActivation);
  input.addEventListener('input', onInputActivation);
};

export {init};
