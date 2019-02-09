const MULTIPLICITY = 2;
const image = document.getElementById('img');
const height = Math.round(image.height / MULTIPLICITY);
const width = Math.round(image.width / MULTIPLICITY);


export default function() {
    let canvasHandler = document.getElementById('print-hendler');
    if (!canvasHandler) {
        canvasHandler = createCanvas({
            height,
            width,
            id: 'print-hendler',
            className: 'no-print'
        }); // creates new canvas element


        const canvases = document.createElement('div');

        canvases.id = 'canvases';

        canvases.appendChild(canvasHandler);

        document.querySelector('body').appendChild(canvases);
    }

    const context = canvasHandler.getContext('2d');
    return {context, image, height, width, canvas: canvasHandler};
}

function createCanvas({width, height, id, className}) {
    const canvasTmp = document.createElement('canvas'); // creates new canvas element
    canvasTmp.height = height; // get original canvas height
    canvasTmp.width = width; // get original canvas width

    canvasTmp.id = id;
    canvasTmp.className = className;
    return canvasTmp;
}

