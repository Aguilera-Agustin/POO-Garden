"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mint = void 0;
const _plant_1 = require("./_plant");
class Mint extends _plant_1.Plant {
    constructor(year, height) {
        super(year, height);
        this.sunHs = 6;
    }
    hs() {
        return this.sunHs;
    }
    isFather() {
        return (super.isStrong() || super.getHeight() > 0.4);
    }
    size() {
        return (super.getHeight() * 3);
    }
    perfectPlot(plot) {
        return plot.surface() > 6;
    }
}
exports.Mint = Mint;
//# sourceMappingURL=mint.js.map