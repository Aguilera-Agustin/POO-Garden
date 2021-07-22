import { Plant } from '../plants/plant';
export class Plot {
    private width :number;
    private lengthty :number;
    private sunHs :number;
    private plants :Plant[];
    constructor(size:{width: number, lengthty: number}, sunHs:number, plants:Plant[]){
        this.width=size.width;
        this.lengthty=size.lengthty;
        this.sunHs=sunHs;
        this.plants=plants;
    }
}
