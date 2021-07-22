import { Plant } from '../plants/plant';
import { getMaxCapacityOfPlants, sowCapacityValidation, strongValidation } from '../../helpers/plotHelper';
export abstract class Plot {
    private width :number;
    private lengthy :number;
    private sunHs :number;
    private plants :Plant[];
    
    constructor(size:{width: number, lengthy: number}, sunHs:number, plants:Plant[]=[]){
        this.width=size.width;
        this.lengthy=size.lengthy;
        this.sunHs=sunHs;
        this.plants=plants;
    }

    surface():number{
        return this.lengthy*this.width;
    }

    capacity():number{
        const size ={
            width: this.width,
            lengthy: this.lengthy
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

    
    wellAssociatedPlants():number{
        const associatedPlants = this.plants.filter(eachPlant=>(this.goodAssociation(eachPlant)));
        return associatedPlants.length;
    }

    wellAssociatedPercentage():number{
        return this.wellAssociatedPlants() / this.plants.length;
    }

    size():{width: number;  lengthy: number;}{
        return {
            width: this.width,
            lengthy: this.lengthy
        };
    }

    sunHours():number{
        return this.sunHs;
    }

    plotPlants():Plant[]{
        return this.plants;
    }

    abstract goodAssociation(plant:Plant):boolean;
}
