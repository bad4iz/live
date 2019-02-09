import createCanvas from './createCanvas';
let draw = false;
let move = false;
const mouse = { x: 0, y: 0};
const rect = {dx: 50, dy: 50, width: 50, height: 50};
let shiftX;
let shiftY;

export default function() {
    const {canvas, context, height, image, width} = createCanvas();
    context.drawImage(image, 0, 0, width, height);
    context.strokeStyle = 'orange';
    context.strokeRect(rect.dx, rect.dy, rect.width, rect.height);

    canvas.addEventListener('mousedown', function(e) {
        move = true;
    });

    canvas.addEventListener('mousemove', function(e) {
        if (move === true) {
            rect.dx += e.movementX;
            rect.dy += e.movementY;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.strokeRect(rect.dx, rect.dy, rect.width, rect.height);

        }
    });


    canvas.addEventListener('mouseup', function(e) {
        move = false;
    });
}


// var mouse = {
//     x: 0,
//     y: 0
// };

// var selected = false;

// var cnv = document.getElementById('canvas');
// var ctx = cnv.getContext('2d');
// var width = 500;


// var height = 300;

// cnv.width = width;
// cnv.height = height;
// cnv.style.background = '#D9FF9E';
// ctx.fillStyle = '#985DTD';
// ctx.strokeStyle = '#E6FF00';
// ctx.lineWidth = 3;

// var Triangle = function(...points) {
//     this.points = points;
// };
// Triangle.prototype = {
//     draw() {
//         ctx.beginPath();
//         ctx.moveTo(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
//         this.points.forEach(n => ctx.lineTo(n.x, n.y));
//         ctx.fill();
//     },
//     mouseIn() {
//         return PointInTriangle(mouse, ...this.points);
//     }
// };

// var Rect = function(...points) {
//     this.points = points;
// };
// Rect.prototype = {
//     draw() {
//         ctx.fillRect(this.points[0].x, this.points[0].y, this.points[1].x - this.points[0].x, this.points[1].y - this.points[0].y);
//     },
//     mouseIn() {
//         return (
//             mouse.x >= this.points[0].x && mouse.x <= this.points[1].x &&
//         mouse.y >= this.points[0].y && mouse.y <= this.points[1].y
//         );
//     }
// };

// var shapes = [
//     new Triangle(
//         { x: 50, y: 75 },
//         { x: 0, y: 100 },
//         { x: 0, y: 75 }
//     ),
//     new Triangle(
//         { x: 150, y: 175 },
//         { x: 100, y: 100 },
//         { x: 100, y: 175 }
//     ),
//     new Rect(
//         { x: 200, y: 200 },
//         { x: 300, y: 250 }
//     )
// ];

// shapes.forEach(n => n.draw());

// window.onmousemove = function(e) {
//     mouse.x = e.pageX - cnv.offsetLeft;
//     mouse.y = e.pageY - cnv.offsetTop;

//     if (selected) {
//         selected.points.forEach(n => {
//             n.x += e.movementX;
//             n.y += e.movementY;
//         });

//         ctx.clearRect(0, 0, cnv.width, cnv.height);
//         shapes.forEach(n => n.draw());
//     }
// };

// window.onmousedown = function() {
//     if (!selected) {
//         shapes.forEach(n => {
//             if (n.mouseIn(mouse)) {
//                 selected = n;
//             }
//         });
//     }
// };

// window.onmouseup = function() {
//     selected = null;
// };


// function sign(p1, p2, p3) {
//     return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
// }

// function PointInTriangle(pt, v1, v2, v3) {
//     var
//         b1 = sign(pt, v1, v2) < 0;


// var b2 = sign(pt, v2, v3) < 0;


// var b3 = sign(pt, v3, v1) < 0;

//     return ((b1 == b2) && (b2 == b3));
// }


