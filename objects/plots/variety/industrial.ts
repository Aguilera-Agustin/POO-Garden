import { Plot } from '../plot';
import { Plant } from '../../plants/plant';

export class IndustrialPlot extends Plot {
    constructor(size:{width: number, lengthy: number}, sunHs:number, plants:Plant[]=[]){
        super(size, sunHs, plants);
    }

    goodAssociation(plant: Plant): boolean {
        return (super.plotPlants().length<=2 && plant.isStrong());
    }

}