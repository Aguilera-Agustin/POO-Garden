import { Plot } from '../objects/plots/_plot';

export const getmostSelfSustaining = (plots: Plot[]) => {
    const plotsWithFourPlantsOrMore = plots.filter(eachPlot=>eachPlot.plotPlants().length>4);
    let returnPlot:Plot = plots[0];
    plotsWithFourPlantsOrMore.forEach(eachPlot => {
        if(eachPlot.wellAssociatedPercentage()>returnPlot?.wellAssociatedPercentage()){
            returnPlot = eachPlot;
        }
    });
    console.log(returnPlot)
    return returnPlot;
} 
