import Rectangle from './Rectangle';
import createCanvas from './createCanvas';
const mouse = { x: 0, y: 0};

let mousedown = false;
export default function() {
    const {canvas, context, height, image, width} = createCanvas();
    const rectangle = new Rectangle(context);
    rectangle.height = height;
    context.strokeStyle = 'orange';

    const draw = () => {
        context.fillStyle = 'rgba(225,0,0,0.5)';
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(0, 0, canvas.width, canvas.height);
        rectangle.draw();
    };

    draw();

    canvas.addEventListener('mousedown', function(e) {
        mousedown = 'true';
    });

    canvas.addEventListener('mousemove', function(e) {
        if (mousedown === false) {
            return;
        }
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;

        if (mouse.x > rectangle.dx - 10 && mouse.x < rectangle.dx + 10) {
            rectangle.width += -e.movementX;
            console.log(rectangle.width);
            rectangle.dx += e.movementX;
        } else {
            rectangle.dx += e.movementX;
            // rect.dy += e.movementY;
        }
        draw();
    });


    canvas.addEventListener('mouseup', function(e) {
        mousedown = false;
    });
    canvas.addEventListener('mousemove', function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        // mouse.y = e.pageY - this.offsetTop;
        // console.log(mouse.x);
        if (mouse.x > rectangle.dx - 10 && mouse.x < rectangle.dx + 10) {
            canvas.style.cursor = 'col-resize';
        } else {
            canvas.style.cursor = 'auto';
        }
    });
}


