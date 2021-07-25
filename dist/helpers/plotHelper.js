"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strongValidation = exports.sowCapacityValidation = exports.getMaxCapacityOfPlants = void 0;
const plotError_1 = require("../errors/plotError");
const getMaxCapacityOfPlants = (size, surface) => {
    const { lengthy, width } = size;
    return width > lengthy ? (surface / 5) : ((surface / 3) + lengthy);
};
exports.getMaxCapacityOfPlants = getMaxCapacityOfPlants;
const sowCapacityValidation = (plants, capacity) => {
    if (plants.length === capacity) {
        const myError = new plotError_1.plotError('No capacity in the plot.');
        console.log(myError.sayDetail());
    }
};
exports.sowCapacityValidation = sowCapacityValidation;
const strongValidation = (plant, sunReceived) => {
    if (sunReceived > plant.hs() + 2) {
        const myError = new plotError_1.plotError("Incompatibility in the sun's hour.");
        console.log(myError.sayDetail());
    }
};
exports.strongValidation = strongValidation;
//# sourceMappingURL=plotHelper.js.map