import { Mint } from '../mint';

export class PepperMint extends Mint{
    
    constructor(year: number, height: number){
        super(year, height);
    }

    size():number{
        return (super.size()*2);
    }
}