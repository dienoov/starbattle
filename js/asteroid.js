class Asteroid {
    constructor({canvas}) {
        this.width = 48;
        this.height = 48;

        this.x = canvas.width;
        this.y = Math.floor(Math.random() * (canvas.height - this.height));

        this.speed = 8;
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

export default Asteroid;