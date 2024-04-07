const AnimationDuration = {
  MENU_CONTENT: 300,
  SCROLL_ICON: 300,
};

const AnimationProperty = {
  MENU_CONTENT: '--animation-menu-content',
  SCROLL_ICON: '--animation-scroll-icon',
};

const AnimationShorthand = {
  MenuContent: {
    SHOW: `show-menu-content ${AnimationDuration.MENU_CONTENT / 1000}s ease-in-out both`,
    HIDE: `hide-menu-content ${AnimationDuration.MENU_CONTENT / 1000}s ease-in-out both`,
  },
  ScrollIcon: {
    SHOW: `show-scroll-icon ${AnimationDuration.SCROLL_ICON / 1000}s ease-in-out both`,
    HIDE: `hide-scroll-icon ${AnimationDuration.SCROLL_ICON / 1000}s ease-in-out both`,
  }
};

export {AnimationShorthand, AnimationDuration, AnimationProperty};
