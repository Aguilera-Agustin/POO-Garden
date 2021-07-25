"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getmostSelfSustaining = void 0;
const getmostSelfSustaining = (plots) => {
    const plotsWithFourPlantsOrMore = plots.filter(eachPlot => eachPlot.plotPlants().length > 4);
    let returnPlot = plots[0];
    plotsWithFourPlantsOrMore.forEach(eachPlot => {
        if (eachPlot.wellAssociatedPercentage() > (returnPlot === null || returnPlot === void 0 ? void 0 : returnPlot.wellAssociatedPercentage())) {
            returnPlot = eachPlot;
        }
    });
    console.log(returnPlot);
    return returnPlot;
};
exports.getmostSelfSustaining = getmostSelfSustaining;
//# sourceMappingURL=intaHelper.js.map