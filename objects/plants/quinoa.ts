import { Plot } from '../plots/_plot';
import { Plant } from './_plant';

export class Quinoa extends Plant{
    private sunHs:number;
    constructor(year: number, height: number, sunHs:number){
        super(year, height);
        this.sunHs=sunHs;
    }

    hs(): number {
        return this.sunHs;
    }
  
    isFather(): boolean {
        return (super.isStrong() || super.getYear()<2005);
    }

    size(): number {
        return 0.5;
    }
    perfectPlot(plot: Plot): boolean {
        return plot.plotPlants().find((eachPlant)=>(eachPlant.getHeight()>1.5))?(false):(true)
    }
}