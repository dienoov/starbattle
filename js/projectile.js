class Projectile {
    constructor({canvas, player}) {
        this.canvas = canvas;

        this.width = 16;
        this.height = 16;

        this.x = player.x + player.width;
        this.y = player.y + player.height / 2 - this.height / 2;

        this.speed = 20;
    }

    accelerate() {
        this.x += this.speed;
    }

    isOut(cb = false) {
        const status = this.x >= this.canvas.width;

        if (!cb) return status;

        if (status) return cb();
    }
}

export default Projectile;