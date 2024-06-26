import getDeclension from '@dubaua/get-declension';

const links = document.querySelectorAll('.menu__link[data-counter]');
const projectLinks = document.querySelectorAll('.menu__link--type-project');

const getTemplate = (count, word) => `
  <div class="menu__counter">
    <div class="menu__count-number">${count}</div>
    <span class="visually-hidden">${word}</span>
  </div>
`;

const addCounter = (count, parentLink) => {
  const word = getDeclension({ count: parseInt(count, 10), one: 'уведомление', few: 'уведомления', many: 'уведомлений' }).split(' ')[1];
  const temporaryStore = document.createElement('div');
  temporaryStore.innerHTML = getTemplate(count, word);
  parentLink.appendChild(temporaryStore.firstElementChild);
};

const init = () => {
  links.forEach((link) => {
    addCounter(link.dataset.counter, link);
  });

  projectLinks.forEach((link) => {
    link.style.setProperty('--icon-color', link.dataset.bookmarkColor);
  });
};

export {init};
