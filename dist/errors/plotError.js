"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plotError = void 0;
class plotError extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, plotError.prototype);
    }
    sayDetail() {
        return "PLOT ERROR - " + this.message;
    }
}
exports.plotError = plotError;
//# sourceMappingURL=plotError.js.map