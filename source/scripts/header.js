const header = document.querySelector('.header');
const button = header.querySelector('.header__toggle');

const onButtonClick = () => {
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
};

const init = () => {
  button.addEventListener('click', onButtonClick);
};

export {init};
