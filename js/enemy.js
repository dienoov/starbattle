class Enemy {
    constructor({canvas}) {
        this.width = 64;
        this.height = 64;

        this.x = canvas.width;
        this.y = Math.floor(Math.random() * (canvas.height - this.height));

        this.speed = 5;
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

export default Enemy;