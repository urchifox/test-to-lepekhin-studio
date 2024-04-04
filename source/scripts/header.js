const header = document.querySelector('.header');
const button = header.querySelector('.header__toggler');
const input = header.querySelector('.search-form__input');

const onButtonClick = () => {
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
  input.value = '';
};

const init = () => {
  button.addEventListener('click', onButtonClick);
};

export {init};
