"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inta = void 0;
const intaHelper_1 = require("../../helpers/intaHelper");
class Inta {
    constructor(plots) {
        this.plots = plots;
    }
    addPlot(plot) {
        this.plots.push(plot);
    }
    plantsAverage() {
        let counter = 0;
        this.plots.forEach(eachPlot => {
            counter = counter + eachPlot.plotPlants.length;
        });
        return counter / this.plots.length;
    }
    mostSelfSustaining() {
        return intaHelper_1.getmostSelfSustaining(this.plots);
    }
}
exports.Inta = Inta;
//# sourceMappingURL=inta.js.map