"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getmostSelfSustaining = void 0;
const getmostSelfSustaining = (plots) => {
    const plotsWithFourPlantsOrMore = plots.filter(eachPlot => eachPlot.plotPlants().length > 4);
    const sortedPlots = plotsWithFourPlantsOrMore.sort((a, b) => {
        if (a.wellAssociatedPercentage > b.wellAssociatedPercentage) {
            return 1;
        }
        if (a.wellAssociatedPercentage < b.wellAssociatedPercentage) {
            return -1;
        }
        return 0;
    });
    return sortedPlots[-1];
};
exports.getmostSelfSustaining = getmostSelfSustaining;
//# sourceMappingURL=intaHelper.js.map