import {AnimationShorthand, AnimationDuration, AnimationProperty} from './animation-data';
import {isOverflowedVertically, isVisible} from './utils';

const header = document.querySelector('.header__wrapper');
const menu = header.querySelector('.menu');
const iconTop = menu.querySelector('.menu__scroll-icon--position-top');
const iconBottom = menu.querySelector('.menu__scroll-icon--position-bottom');

const setIconVisibility = (icon) => {
  if (isOverflowedVertically(menu) !== isVisible(icon)) {
    const animation = isOverflowedVertically(menu) ?
      AnimationShorthand.ScrollIcon.SHOW :
      AnimationShorthand.ScrollIcon.HIDE;
    icon.style.setProperty(AnimationProperty.SCROLL_ICON, animation);
  }
};

const animateMenuResize = () => {
  const animation = header.classList.contains('header__wrapper--closed') ?
    AnimationShorthand.MenuContent.SHOW :
    AnimationShorthand.MenuContent.HIDE;
  header.style.setProperty(AnimationProperty.MENU_CONTENT, animation);

  setTimeout(() => setIconVisibility(iconBottom), AnimationDuration.MENU_CONTENT);
};

const onMenuScroll = () => {
  const iconTopAnimation = menu.scrollTop > 0 ?
    AnimationShorthand.ScrollIcon.SHOW :
    AnimationShorthand.ScrollIcon.HIDE;
  iconTop.style.setProperty(AnimationProperty.SCROLL_ICON, iconTopAnimation);

  const iconBottomAnimation = menu.scrollHeight - menu.clientHeight > menu.scrollTop ?
    AnimationShorthand.ScrollIcon.SHOW :
    AnimationShorthand.ScrollIcon.HIDE;
  iconBottom.style.setProperty(AnimationProperty.SCROLL_ICON, iconBottomAnimation);
};

const onWindowResize = () => {
  setIconVisibility(iconBottom);
};

export {animateMenuResize, onMenuScroll, onWindowResize};
