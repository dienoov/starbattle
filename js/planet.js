import SpaceObject from "./space-object.js";

class Planet extends SpaceObject {
    constructor({canvas, x, y, width, height, speed, img}) {
        super({canvas, width, height, speed});

        this.img = new Image();
        this.img.src = img;

        this.x = x ?? canvas.width;
        this.y = y ?? Math.floor(Math.random() * (canvas.height - this.height));
    }
}

export default Planet;