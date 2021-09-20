import Blueprint from "./blueprint.js";

class Player extends Blueprint {
    constructor({canvas, ctx}) {
        super({canvas, ctx});

        this.x = 100;
        this.y = 100;

        this.width = 64;
        this.height = 64;

        this.img = new Image();
        this.img.src = 'img/player.png';

        this.canvas.addEventListener('mousemove', (ev) => this.move(ev));
    }

    move(ev) {
        this.x = ev.pageX - this.canvas.getBoundingClientRect().left - this.width / 2;
        this.y = ev.pageY - this.canvas.getBoundingClientRect().top - this.height / 2;
    }

    draw() {
        this.addTick();
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

export default Player;