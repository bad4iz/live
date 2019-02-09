const rect = {dx: 50, dy: 0, width: 50, height: 50};
let context;
function Rectangle(ctx) {
    context = ctx;
    Object.defineProperty(this, 'dx', {
        get: () => {
            return rect.dx;
        },
        set: (newValue) => {
            rect.dx = newValue;
        }
    });

    Object.defineProperty(this, 'dy', {
        get: () => {
            return rect.dy;
        },
        set: (newValue) => {
            rect.dy = newValue;
        }
    });
    Object.defineProperty(this, 'width', {
        get: () => {
            return rect.width;
        },
        set: (newValue) => {
            rect.width = newValue;
        }
    });

    Object.defineProperty(this, 'height', {
        get: () => {
            return rect.height;
        },
        set: (newValue) => {
            rect.height = newValue;
        }
    });
}


Rectangle.prototype.draw = function() {
    context.clearRect(rect.dx, rect.dy, rect.width, rect.height);

    context.strokeRect(rect.dx, rect.dy, rect.width, rect.height);
};

export default Rectangle;
