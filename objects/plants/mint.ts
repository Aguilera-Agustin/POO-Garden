import { Plot } from '../plots/_plot';
import { Plant } from './_plant';

export class Mint extends Plant{
    private sunHs:number;
    constructor(year: number, height: number){
        super(year, height);
        this.sunHs=6;
    }

    hs(): number {
        return this.sunHs;
    }
  
    isFather(): boolean {
        return (super.isStrong() || super.getHeight()>0.4);
    }

    size(): number {
        return (super.getHeight() * 3);
    }
    perfectPlot(plot: Plot): boolean {
        throw new Error('Method not implemented.');
    }
}