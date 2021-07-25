"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quinoa = void 0;
const _plant_1 = require("./_plant");
class Quinoa extends _plant_1.Plant {
    constructor(year, height, sunHs) {
        super(year, height);
        this.sunHs = sunHs;
    }
    hs() {
        return this.sunHs;
    }
    isFather() {
        return (super.isStrong() || super.getYear() < 2005);
    }
    size() {
        return 0.5;
    }
    perfectPlot(plot) {
        return plot.plotPlants().find((eachPlant) => (eachPlant.getHeight() > 1.5)) ? (false) : (true);
    }
}
exports.Quinoa = Quinoa;
//# sourceMappingURL=quinoa.js.map