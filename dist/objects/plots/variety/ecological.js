"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcologicalPlot = void 0;
const _plot_1 = require("../_plot");
class EcologicalPlot extends _plot_1.Plot {
    constructor(size, sunHs, plants = []) {
        super(size, sunHs, plants);
    }
    goodAssociation(plant) {
        return (plant.perfectPlot(this) && !super.hasComplications());
    }
}
exports.EcologicalPlot = EcologicalPlot;
//# sourceMappingURL=ecological.js.map