import { Plot } from '../plots/plot';
import { Plant } from './plant';

export class Mint extends Plant{
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
        throw new Error('Method not implemented.');
    }
}