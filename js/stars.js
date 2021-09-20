import Blueprint from "./blueprint.js";
import Star from "./star.js";

class Stars extends Blueprint {
    constructor({canvas, ctx}) {
        super({canvas, ctx});

        this.speed = 1;

        this.array = [];

        this.initial();
    }

    initial() {
        for (let i = 0; i < 140; i++) {
            const x = Math.floor(Math.random() * this.canvas.width);
            const y = Math.floor(Math.random() * this.canvas.height);
            this.array.push(new Star({canvas: this.canvas, x, y}));
        }
    }

    random() {
        this.array.push(new Star({canvas: this.canvas}));
    }

    remove(index) {
        return this.array.splice(index, 1);
    }

    draw() {
        this.addTick();
        this.everyTick(() => this.random(), 7);

        this.array.forEach((star, index) => {
            star.accelerate();
            star.isOut(() => this.remove(index));

            this.ctx.beginPath();
            this.ctx.fillStyle = 'lightgray';
            this.ctx.rect(star.x, star.y, star.width, star.height);
            this.ctx.fill();
            this.ctx.closePath();
        })
    }
}

export default Stars;