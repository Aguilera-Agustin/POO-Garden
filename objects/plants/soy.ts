import { Plot } from '../plots/plot';
import { Plant } from './plant';
import { getSoyHs, getSoyFatherCondition } from '../../helpers/soyHelper';

export class Soy extends Plant{
    private sunHs:number;
    constructor(year: number, height: number){
        super(year, height);
        this.sunHs=6;
    }

    hs(): number {
        return getSoyHs(super.getHeight());
    }
  
    isFather(): boolean {
        const plantData = {
            year: super.getYear(),
            height: super.getHeight()
        }
        return (super.isStrong() || getSoyFatherCondition(plantData));
    }

    size(): number {
        return (super.getHeight() / 2);
    }
    perfectPlot(plot: Plot): boolean {
        throw new Error('Method not implemented.');
    }
}