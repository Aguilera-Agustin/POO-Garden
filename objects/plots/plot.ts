import { Plant } from '../plants/plant';
import { getMaxCapacityOfPlants, sowCapacityValidation, strongValidation } from '../../helpers/plotHelper';
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

    surface():number{
        return this.lengthty*this.width;
    }

    capacity():number{
        const size ={
            width: this.width,
            lengthty: this.lengthty
        }
        return getMaxCapacityOfPlants(size, this.surface());
    }

    hasComplications():boolean{
        return this.plants.find(eachPlant=> eachPlant.hs() < this.sunHs)?true:false;
    }

    sow(newPlant:Plant):void{
        sowCapacityValidation(this.plants, this.capacity());     //TODO:IMPROVE ERRORS
        strongValidation(newPlant, this.sunHs);                  //TODO:IMPROVE ERRORS
        this.plants.push(newPlant);
    }
}
