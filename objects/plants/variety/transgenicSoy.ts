import { Soy } from "../soy";
import { Plot } from '../../plots/plot';

export class TransgenicSoy extends Soy{
    
    constructor(year: number, height: number){
        super(year, height);
    }

    isFather():boolean{
        return false
    }

    perfectPlot(plot: Plot): boolean {
        throw new Error('Method not implemented.');
    }
}