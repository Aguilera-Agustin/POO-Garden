import { Plot } from '../plots/_plot';
import { Plant } from './_plant';
import { getSoyHs, getSoyFatherCondition } from '../../helpers/soyHelper';

export class Soy extends Plant{
    constructor(year: number, height: number){
        super(year, height);
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