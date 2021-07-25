"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soy = void 0;
const _plant_1 = require("./_plant");
const soyHelper_1 = require("../../helpers/soyHelper");
class Soy extends _plant_1.Plant {
    constructor(year, height) {
        super(year, height);
    }
    hs() {
        return soyHelper_1.getSoyHs(super.getHeight());
    }
    isFather() {
        const plantData = {
            year: super.getYear(),
            height: super.getHeight()
        };
        return (super.isStrong() || soyHelper_1.getSoyFatherCondition(plantData));
    }
    size() {
        return (super.getHeight() / 2);
    }
    perfectPlot(plot) {
        return plot.sunHours() === this.hs();
    }
}
exports.Soy = Soy;
//# sourceMappingURL=soy.js.map