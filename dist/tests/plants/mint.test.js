"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mint_1 = require("../../objects/plants/mint");
const myFirstMint = new mint_1.Mint(2021, 5);
const mySecondMint = new mint_1.Mint(2021, 0.3);
test('Correct value of hours under sun', () => {
    expect(myFirstMint.hs()).toBe(6);
});
test('Is this Mint a Father plant?', () => {
    expect(myFirstMint.isFather()).toBe(true);
});
test('Is this Mint a Father plant?', () => {
    expect(mySecondMint.isFather()).toBe(false);
});
test('Correct value of size', () => {
    expect(mySecondMint.size()).toBeCloseTo(0.89, 0.91);
});
test('Correct value of size', () => {
    expect(myFirstMint.size()).toBe(15);
});
//# sourceMappingURL=mint.test.js.map