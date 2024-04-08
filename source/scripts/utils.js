const isOverflowedVertically = (element) => element.scrollHeight > element.clientHeight;
const isVisible = (element) => window.getComputedStyle(element).opacity === '1';

export {isOverflowedVertically, isVisible};
