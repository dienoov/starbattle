class SpaceObject {
    constructor({canvas, width, height, speed}) {
        this.canvas = canvas;

        this.width = width;
        this.height = height;

        this.speed = speed;
    }

    accelerate() {
        this.x -= this.speed;
    }

    isOut(cb = false) {
        const status = this.x < -this.width;

        if (!cb) return status;

        if (status) return cb();
    }
}

export default SpaceObject;