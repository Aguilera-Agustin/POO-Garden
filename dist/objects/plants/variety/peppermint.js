"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperMint = void 0;
const mint_1 = require("../mint");
class PepperMint extends mint_1.Mint {
    constructor(year, height) {
        super(year, height);
    }
    size() {
        return (super.size() * 2);
    }
}
exports.PepperMint = PepperMint;
//# sourceMappingURL=peppermint.js.map