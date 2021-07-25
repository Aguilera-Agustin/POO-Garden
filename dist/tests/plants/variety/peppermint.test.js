"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const peppermint_1 = require("../../../objects/plants/variety/peppermint");
const mint_1 = require("../../../objects/plants/mint");
const myPeppermint = new peppermint_1.PepperMint(2021, 5);
const myMint = new mint_1.Mint(2021, 5);
test('Correct value of size', () => {
    expect(myPeppermint.size()).toBe(myMint.size() * 2);
});
//# sourceMappingURL=peppermint.test.js.map