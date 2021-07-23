import { Soy } from "../soy";
import { Plot } from '../../plots/_plot';

export class TransgenicSoy extends Soy{
    
    constructor(year: number, height: number){
        super(year, height);
    }

    isFather():boolean{
        return false;
    }

    perfectPlot(plot: Plot): boolean {
        return plot.capacity()===1;
    }
}