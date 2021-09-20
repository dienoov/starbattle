class Star {
    constructor({canvas, x, y}) {
        this.width = 4;
        this.height = 4;

        this.x = x ?? canvas.width;
        this.y = y ?? Math.floor(Math.random() * (canvas.height - this.height));

        this.speed = 1;
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

export default Star;