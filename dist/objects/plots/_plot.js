"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plot = void 0;
const plotHelper_1 = require("../../helpers/plotHelper");
class Plot {
    constructor(size, sunHs, plants = []) {
        this.width = size.width;
        this.lengthy = size.lengthy;
        this.sunHs = sunHs;
        this.plants = plants;
    }
    surface() {
        return this.lengthy * this.width;
    }
    capacity() {
        const size = {
            width: this.width,
            lengthy: this.lengthy
        };
        return plotHelper_1.getMaxCapacityOfPlants(size, this.surface());
    }
    hasComplications() {
        return this.plotPlants().find(eachPlant => eachPlant.hs() < this.sunHours()) ? true : false;
    }
    sow(newPlant) {
        plotHelper_1.sowCapacityValidation(this.plants, this.capacity()); //TODO:IMPROVE ERRORS
        plotHelper_1.strongValidation(newPlant, this.sunHs); //TODO:IMPROVE ERRORS
        this.plants.push(newPlant);
    }
    wellAssociatedPlants() {
        const associatedPlants = this.plants.filter(eachPlant => (this.goodAssociation(eachPlant)));
        return associatedPlants.length;
    }
    wellAssociatedPercentage() {
        return this.wellAssociatedPlants() / this.plants.length;
    }
    size() {
        return {
            width: this.width,
            lengthy: this.lengthy
        };
    }
    sunHours() {
        return this.sunHs;
    }
    plotPlants() {
        return this.plants;
    }
}
exports.Plot = Plot;
//# sourceMappingURL=_plot.js.map