import {init as initHeader} from './header.js';
import {init as initSearchForm} from './search-form.js';
import {init as initMenuScrollbar} from './menu-scrollbar.js';
import {init as initMenuLink} from './menu-link.js';
import {onWindowResize} from './animation-manager.js';

initHeader();
initSearchForm();
initMenuScrollbar();
initMenuLink();
window.addEventListener('resize', onWindowResize);
