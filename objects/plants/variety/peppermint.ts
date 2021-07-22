import { Mint } from '../mint';

export class Peppermint extends Mint{
    
    constructor(year: number, height: number){
        super(year, height);
    }

    size():number{
        return super.getHeight();
    }
}