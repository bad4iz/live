import './style.css';
import Animated from './lib/animateworld';
const ace = window.ace;

import world from './script.js';

new Animated(world);

var editor = ace.edit('editor');
editor.setTheme('ace/theme/dracula');
editor.session.setMode('ace/mode/javascript');
