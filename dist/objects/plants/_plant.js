"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plant = void 0;
class Plant {
    constructor(year, height) {
        this.year = year;
        this.height = height;
    }
    /**
     *
     * @returns Year of obtaining this plant
     */
    getYear() {
        return this.year;
    }
    /**
     *
     * @returns Total plant's height
     */
    getHeight() {
        return this.height;
    }
    /**
     *
     * @returns If this plant is Strong
     */
    isStrong() {
        return (this.hs() > 10);
    }
}
exports.Plant = Plant;
//# sourceMappingURL=_plant.js.map