const links = document.querySelectorAll('.menu__link[data-counter]');

const getTemplate = (count) => `
  <div class="menu__counter">
    <div class="menu__count-number">${count}</div>
    <span class="visually-hidden">уведомлений</span>
  </div>
`;

const addCounter = (count, parentLink) => {
  const temporaryStore = document.createElement('div');
  temporaryStore.innerHTML = getTemplate(count);
  parentLink.appendChild(temporaryStore.firstElementChild);
};

const init = () => {
  links.forEach((link) => {
    addCounter(link.dataset.counter, link);
  });
};

export {init};
