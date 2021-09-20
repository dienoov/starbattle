const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const bgSfx = new Audio('sfx/bg.mpeg');

canvas.width = 960;
canvas.height = 600;

document.body.append(canvas);

bgSfx.loop = true;

canvas.addEventListener('click', () => {
    // bgSfx.play();
});

export {canvas, ctx};