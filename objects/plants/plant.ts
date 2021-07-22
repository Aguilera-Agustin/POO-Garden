export abstract class Plant{
    //Vars
    private year: number;
    private height: number;
    
    //Constructor
    constructor(year:number, height:number){
        this.year=year;
        this.height=height;
    }

    //Methods
    getYear():number{
        return this.year;
    } 
    getHeight():number{
        return this.height;
    } 

    //Abstract Methods
    abstract hs():number;
    abstract isStrong():boolean;
    abstract isFather():number;
    abstract size():number;
    abstract perfectPlot():boolean;
}