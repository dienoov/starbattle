import Projectile from "./projectile.js";

class Projectiles {
    constructor({canvas, ctx, player}) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = player;

        this.img = new Image();
        this.img.src = 'img/projectile.png';

        this.sfx = new Audio('sfx/projectile.wav');

        this.array = [];

        document.addEventListener('keydown', (ev) => (!ev.repeat) && (ev.code === 'Space') && this.fire());
    }

    fire() {
        this.array.push(new Projectile({canvas: this.canvas, player: this.player}));
        this.sfx.currentTime = 0;
        this.sfx.play();
    }

    remove(index) {
        return this.array.splice(index, 1);
    }

    draw() {
        this.array.forEach((projectile, index) => {
            projectile.isOut(() => this.remove(index));
            projectile.accelerate();
            this.ctx.drawImage(this.img, projectile.x, projectile.y, projectile.width, projectile.height);
        });
    }
}

export default Projectiles;