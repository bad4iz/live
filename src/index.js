import './style.css';
import AnimatedTxt from './lib/animateworldtxt';
// import Animated from './lib/animateworld';
import {Vector, BouncingCritter, directions, functions, Grid, View, World} from './scripttxt';


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const ace = window.ace;

// import World, { Wall, BouncingCritter} from './script';
// import world from './script';
import plan from './plan';


var editor = ace.edit('editor');
editor.setTheme('ace/theme/dracula');
editor.session.setMode('ace/mode/javascript');
// var htmlEditor = ace.edit('html-editor');
// htmlEditor.setTheme('ace/theme/monokai');
// htmlEditor.session.setMode('ace/mode/html');


const save = document.getElementById('save');
// console.log(require('./scripttxt').default.toString());

save.addEventListener('click', update);
document.addEventListener('keydown', saving);

function saving(event) {
    if (event.ctrlKey && event.keyCode === 83) {
        event.preventDefault();
        update();
    }
}

function update() {
    // const text = Animated.toString() +
    //     World.toString() +
    //     Wall.toString() +
    //     BouncingCritter.toString() +
    //     plan.toString() +
    // `
    // var world = new World(plan, {
    //     '#': Wall,
    //     o: BouncingCritter,
    //     // '=': WallFollower
    // });\
    const iframe = document.getElementById('result');
    if (iframe) {
        iframe.remove();
    }
    const result = document.createElement('iframe');
    result.id = 'result';
    document.body.appendChild(result);
    // var res = document.getElementById('result').contentWindow.document;
    var res = result.contentWindow.document;
    res.open();
    res.write('<div>jopa</div>');
    res.open();
    res.write('<div>jopa</div>');
    res.write('<script>' + AnimatedTxt + Vector + directions + Grid + functions + World + View + BouncingCritter + '</script>');

    res.write('<script>' + editor.getValue() + '</script>');
    res.write('<script>' + plan + '</script>');
    res.write('<script>var world = new World(plan, {\n    \'#\': Wall,\n    o: BouncingCritter,\n    \'=\': WallFollower\n});</script>');

    res.write('<script>new Animated(world)</script>');


    res.close();
}
