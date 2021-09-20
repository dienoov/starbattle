import Blueprint from "./blueprint.js";

class Score extends Blueprint {
    constructor({canvas, ctx}) {
        super({canvas, ctx});

        this.size = 72;

        this.count = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.font = `${this.size}px Pixel Invaders`;
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`${this.count}`, 10, 30);
        this.ctx.closePath();
    }
}

export default Score;