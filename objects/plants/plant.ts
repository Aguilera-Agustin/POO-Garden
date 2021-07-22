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

    abstract hs():number;
    abstract isStrong():boolean;
    abstract isFather():number;
    abstract size():number;
    abstract perfectPlot():boolean;
}