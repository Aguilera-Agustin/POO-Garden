import { Plot } from '../plots/_plot';
import { getmostSelfSustaining } from '../../helpers/intaHelper';
export class Inta{
    private plots :Plot[];

    constructor(plots:Plot[]){
        this.plots=plots;
    }

    addPlot(plot:Plot):void{
        this.plots.push(plot)
    }

    plantsAverage(){
        let counter = 0;
        this.plots.forEach(eachPlot => {
            counter = counter+eachPlot.plotPlants.length;
        });
        return counter/this.plots.length;
    }

    mostSelfSustaining(){
        return getmostSelfSustaining(this.plots);

    }
}