import { Plot } from '../plots/plot';
export abstract class Plant{
    private year: number;
    private height: number;
    constructor(year:number, height:number){
        this.year=year;
        this.height=height;
    }

    /**
     * 
     * @returns Year of obtaining this plant
     */
    getYear():number{
        return this.year;
    } 

    /**
     * 
     * @returns Total plant's height
     */
    getHeight():number{
        return this.height;
    } 
    isStrong():boolean{
        return (this.hs()>10)
    }

    abstract hs():number;
    abstract isFather():boolean;
    abstract size():number;
    abstract perfectPlot(plot :Plot):boolean;
}