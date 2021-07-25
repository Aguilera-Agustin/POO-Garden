"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrialPlot = void 0;
const _plot_1 = require("../_plot");
class IndustrialPlot extends _plot_1.Plot {
    constructor(size, sunHs, plants = []) {
        super(size, sunHs, plants);
    }
    goodAssociation(plant) {
        return (super.plotPlants().length <= 2 && plant.isStrong());
    }
}
exports.IndustrialPlot = IndustrialPlot;
//# sourceMappingURL=industrial.js.map