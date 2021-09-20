import Blueprint from "./blueprint.js";
import Ally from "./ally.js";

class Allies extends Blueprint {
    constructor({canvas, ctx, projectiles, score}) {
        super({canvas, ctx});

        this.projectiles = projectiles;
        this.score = score;

        this.img = new Image();
        this.img.src = 'img/ally.png';

        this.sfx = new Audio('sfx/ally-destroyed.wav');

        this.array = [];
    }

    random() {
        this.array.push(new Ally({canvas: this.canvas}));
    }

    remove(index) {
        return this.array.splice(index, 1);
    }

    destroy(index) {
        this.score.count -= 10;
        this.sfx.currentTime = 0;
        this.sfx.play();
        return this.remove(index);
    }

    draw() {
        this.addTick();
        this.everyTick(() => this.random(), 127);
        this.array.forEach((ally, allyIndex) => {
            this.projectiles.array.forEach((projectile, projectileIndex) => {
                if (projectile.x < ally.x) return;

                if (projectile.x + projectile.width > ally.x + ally.width) return;

                if (projectile.y < ally.y) return;

                if (projectile.y + projectile.height > ally.y + ally.height) return;

                this.projectiles.remove(projectileIndex);
                this.destroy(allyIndex);
            });
            ally.accelerate();
            ally.isOut(() => this.remove(allyIndex));
            this.ctx.drawImage(this.img, ally.x, ally.y, ally.width, ally.height);
        });
    }
}

export default Allies;