"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plant = void 0;
class Plant {
    //Constructor
    constructor(year, height) {
        this.year = year;
        this.height = height;
    }
    //Methods
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
}
exports.Plant = Plant;
//# sourceMappingURL=plant.js.map