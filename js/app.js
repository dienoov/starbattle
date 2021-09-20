import {canvas, ctx} from "./init.js";
import Score from "./score.js";
import Player from "./player.js";
import Projectiles from "./projectiles.js";
import Enemies from "./enemies.js";
import Allies from "./allies.js";
import Asteroids from "./asteroids.js";
import Stars from "./stars.js";

const stars = new Stars({canvas, ctx});
const score = new Score({canvas, ctx});
const player = new Player({canvas, ctx});
const projectiles = new Projectiles({canvas, ctx, player});
const enemies = new Enemies({canvas, ctx, projectiles, score});
const allies = new Allies({canvas, ctx, projectiles, score});
const asteroids = new Asteroids({canvas, ctx, projectiles, score});

const play = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.draw();
    player.draw();
    enemies.draw();
    allies.draw();
    asteroids.draw();
    projectiles.draw();
    score.draw();

    requestAnimationFrame(play);
}

play();