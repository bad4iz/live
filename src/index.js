import playerLoad from '../playerLoad';
import play from '../play';
console.log('index');

document.querySelector('#onePlayer').style.borderColor = 'red';

if (module.hot) {
    module.hot.accept('../play', function() {
        play();
    });
}
if (module.hot) {
    module.hot.accept('../playerLoad', function() {
        playerLoad();
    });
}
