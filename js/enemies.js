import Blueprint from "./blueprint.js";
import Enemy from "./enemy.js";

class Enemies extends Blueprint {
    constructor({canvas, ctx, projectiles, score}) {
        super({canvas, ctx});

        this.projectiles = projectiles;
        this.score = score;

        this.img = new Image();
        this.img.src = 'img/enemy.png';

        this.sfx = new Audio('sfx/enemy-destroyed.wav');

        this.array = [];
        this.random();
    }

    random() {
        this.array.push(new Enemy({canvas: this.canvas}));
    }

    remove(index) {
        return this.array.splice(index, 1);
    }

    destroy(index) {
        this.score.count += 5;
        this.sfx.currentTime = 0;
        this.sfx.play();
        return this.remove(index);
    }

    draw() {
        this.addTick();
        this.everyTick(() => this.random(), 73);
        this.array.forEach((enemy, enemyIndex) => {
            this.projectiles.array.forEach((projectile, projectileIndex) => {
                if (projectile.x < enemy.x) return;

                if (projectile.x + projectile.width > enemy.x + enemy.width) return;

                if (projectile.y < enemy.y) return;

                if (projectile.y + projectile.height > enemy.y + enemy.height) return;

                this.projectiles.remove(projectileIndex);
                this.destroy(enemyIndex);
            });
            enemy.accelerate();
            enemy.isOut(() => this.remove(enemyIndex));
            this.ctx.drawImage(this.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
    }
}

export default Enemies;