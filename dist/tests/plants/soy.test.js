"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soy_1 = require("../../objects/plants/soy");
const myFirstSoy = new soy_1.Soy(2003, 0.3);
const mySecondSoy = new soy_1.Soy(2009, 0.6);
const myThirdSoy = new soy_1.Soy(2021, 3);
test('Correct value of hours under sun', () => {
    expect(myFirstSoy.hs()).toBe(6);
});
test('Correct value of hours under sun', () => {
    expect(mySecondSoy.hs()).toBe(7);
});
test('Correct value of hours under sun', () => {
    expect(myThirdSoy.hs()).toBe(9);
});
test('Is this Soy a Father plant?', () => {
    expect(myFirstSoy.isFather()).toBe(false);
});
test('Is this Soy a Father plant?', () => {
    expect(mySecondSoy.isFather()).toBe(false);
});
test('Correct value of size', () => {
    expect(mySecondSoy.size()).toBeCloseTo(0.29, 0.31);
});
test('Is this Soy a Father plant?', () => {
    expect(myThirdSoy.isFather()).toBe(true);
});
//# sourceMappingURL=soy.test.js.map