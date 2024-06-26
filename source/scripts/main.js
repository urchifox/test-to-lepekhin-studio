import {init as initHeader} from './header.js';
import {init as initSearchForm} from './search-form.js';
import {init as initMenuScrollbar} from './menu-scrollbar.js';
import {init as initMenuLink} from './menu-link.js';
import {init as initStatusMenu} from './status-menu.js';
import {init as initUserMenu} from './user-menu.js';
import {onWindowResize} from './animation-manager.js';

initHeader();
initSearchForm();
initMenuScrollbar();
initMenuLink();
initStatusMenu();
initUserMenu();
window.addEventListener('resize', onWindowResize);
