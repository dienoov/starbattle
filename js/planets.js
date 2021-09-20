import Blueprint from "./blueprint.js";
import Planet from "./planet.js";

class Planets extends Blueprint {
    constructor({canvas, ctx}) {
        super({canvas, ctx});

        this.speed = 1;

        this.array = [];

        // this.initial();
    }

    initial() {
        for (let i = 0; i < 4; i++) {
            const x = Math.floor(Math.random() * this.canvas.width);
            const y = Math.floor(Math.random() * this.canvas.height);
            this.array.push(new Planet({canvas: this.canvas, x, y}));
        }
    }

    random() {
        // this.array.push(new Planet({canvas: this.canvas}));
    }

    remove(index) {
        return this.array.splice(index, 1);
    }

    draw() {
        this.addTick();
        this.everyTick(() => this.random(), 1000);

        this.array.forEach((planet, index) => {
            planet.accelerate();
            planet.isOut(() => this.remove(index));

            this.ctx.drawImage()
        })
    }
}

export default Planets;