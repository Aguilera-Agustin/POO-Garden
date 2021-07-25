"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransgenicSoy = void 0;
const soy_1 = require("../soy");
class TransgenicSoy extends soy_1.Soy {
    constructor(year, height) {
        super(year, height);
    }
    isFather() {
        return false;
    }
    perfectPlot(plot) {
        return plot.capacity() === 1;
    }
}
exports.TransgenicSoy = TransgenicSoy;
//# sourceMappingURL=transgenicSoy.js.map