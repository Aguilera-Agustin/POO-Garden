import { Plant } from '../objects/plants/plant';
export const getMaxCapacityOfPlants = (size:{width:number, lengthy:number}, surface:number) :number =>{
    const { lengthy, width } = size;
    return width>lengthy?(surface/5):((surface/3)+lengthy);
}

export const sowCapacityValidation = (plants: Plant[], capacity: number):void=>{
    if(plants.length===capacity){
        const myError = new plotError('No capacity in the plot.')
        console.log(myError.sayDetail())
    }
}

export const strongValidation = (plant: Plant, sunReceived: number):void=>{
    if(sunReceived > plant.hs()+2){
        const myError = new plotError("Incompatibility in the sun's hour.")
        console.log(myError.sayDetail())
    }
}