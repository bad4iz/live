import './style.css';

import ca from './canvas';

window.onload = () => {
    ca();
};
if (module.hot) {
    module.hot.accept('./canvas.js', function() {
        console.log('Accepting the updated printMe module!');
        ca();
    });
}
