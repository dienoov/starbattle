import Blueprint from "./blueprint.js";
import Asteroid from "./asteroid.js";

class Asteroids extends Blueprint {
    constructor({canvas, ctx, projectiles, score}) {
        super({canvas, ctx});

        this.projectiles = projectiles;
        this.score = score;

        this.img = new Image();
        this.img.src = 'img/asteroid.png';

        this.sfx = new Audio('sfx/enemy-destroyed.wav');

        this.array = [];
    }

    random() {
        this.array.push(new Asteroid({canvas: this.canvas}));
    }

    remove(index) {
        return this.array.splice(index, 1);
    }

    destroy(index) {
        this.score.count += 10;
        this.sfx.currentTime = 0;
        this.sfx.play();
        return this.remove(index);
    }

    draw() {
        this.addTick();
        this.everyTick(() => this.random(), 173);
        this.array.forEach((asteroid, asteroidIndex) => {
            this.projectiles.array.forEach((projectile, projectileIndex) => {
                if (projectile.x < asteroid.x) return;

                if (projectile.x + projectile.width > asteroid.x + asteroid.width) return;

                if (projectile.y < asteroid.y) return;

                if (projectile.y + projectile.height > asteroid.y + asteroid.height) return;

                this.projectiles.remove(projectileIndex);
                this.destroy(asteroidIndex);
            });
            asteroid.accelerate();
            asteroid.isOut(() => this.remove(asteroidIndex));
            this.ctx.drawImage(this.img, asteroid.x, asteroid.y, asteroid.width, asteroid.height);
        });
    }
}

export default Asteroids;