export class plotError extends Error {
    constructor(msg: string) {
        super(msg);

        
        Object.setPrototypeOf(this, plotError.prototype);
    }

    sayDetail() {
        return "PLOT ERROR - " + this.message;
    }
}