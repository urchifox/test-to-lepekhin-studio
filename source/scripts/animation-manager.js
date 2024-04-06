import {AnimationShorthand, AnimationDuration, AnimationProperty} from './animation-data';
import {isOverflowedVertically} from './utils';

const header = document.querySelector('.header');
const menu = header.querySelector('.menu');
const iconTop = menu.querySelector('.menu__scroll-icon--position-top');
const iconBottom = menu.querySelector('.menu__scroll-icon--position-bottom');

let isScrollIconsVisible;

const setIconVisibility = (icon) => {
  if (isOverflowedVertically(menu) !== isScrollIconsVisible) {
    const animation = isOverflowedVertically(menu) ?
      AnimationShorthand.ScrollIcon.SHOW :
      AnimationShorthand.ScrollIcon.HIDE;
    icon.style.setProperty(AnimationProperty.SCROLL_ICON, animation);
    isScrollIconsVisible = isOverflowedVertically(menu);
  }
};

const animateMenuResize = () => {
  const contentAnimationShorthand = header.classList.contains('header--closed') ?
    AnimationShorthand.MenuContent.SHOW :
    AnimationShorthand.MenuContent.HIDE;
  header.style.setProperty(AnimationProperty.MENU_CONTENT, contentAnimationShorthand);

  setTimeout(() => setIconVisibility(iconBottom), AnimationDuration.MENU_CONTENT);
};

const onMenuScroll = () => {
  const iconTopAnimationShorthand = menu.scrollTop > 0 ?
    AnimationShorthand.ScrollIcon.SHOW :
    AnimationShorthand.ScrollIcon.HIDE;
  iconTop.style.setProperty(AnimationProperty.SCROLL_ICON, iconTopAnimationShorthand);

  const iconBottomAnimationShorthand = menu.scrollHeight - menu.clientHeight > menu.scrollTop ?
    AnimationShorthand.ScrollIcon.SHOW :
    AnimationShorthand.ScrollIcon.HIDE;
  iconBottom.style.setProperty(AnimationProperty.SCROLL_ICON, iconBottomAnimationShorthand);
};

const onWindowResize = () => {
  setIconVisibility(iconBottom);
};

export {animateMenuResize, onMenuScroll, onWindowResize};
