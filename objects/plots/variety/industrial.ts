import { Plot } from '../_plot';
import { Plant } from '../../plants/_plant';

export class IndustrialPlot extends Plot {
    constructor(size:{width: number, lengthy: number}, sunHs:number, plants:Plant[]=[]){
        super(size, sunHs, plants);
    }

    goodAssociation(plant: Plant): boolean {
        return (super.plotPlants().length<=2 && plant.isStrong());
    }

}