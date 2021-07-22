import { Plot } from '../objects/plots/_plot';

export const getmostSelfSustaining = (plots: Plot[]) => {
    const plotsWithFourPlantsOrMore = plots.filter(eachPlot=>eachPlot.plotPlants().length>4);
    const sortedPlots = plotsWithFourPlantsOrMore.sort((a:Plot,b:Plot)=>{
        if(a.wellAssociatedPercentage>b.wellAssociatedPercentage){
            return 1;
        }
        if(a.wellAssociatedPercentage<b.wellAssociatedPercentage){
            return -1;
        }
        return 0;
    })
    return sortedPlots[-1]
} 
