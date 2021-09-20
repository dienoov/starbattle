class Blueprint {
    constructor({canvas, ctx}) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.tick = 0;
    }

    addTick(tick = 1) {
        this.tick += tick;
    }

    everyTick(cb, tick) {
        return (this.tick % tick === 0) && cb();
    }
}

export default Blueprint;