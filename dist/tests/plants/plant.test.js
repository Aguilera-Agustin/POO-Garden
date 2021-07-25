"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quinoa_1 = require("../../objects/plants/quinoa");
const myFirstQuinoa = new quinoa_1.Quinoa(2021, 5, 2);
test('Correct value of years', () => {
    expect(myFirstQuinoa.getYear()).toBe(2021);
});
test('Correct value of height', () => {
    expect(myFirstQuinoa.getHeight()).toBe(5);
});
test('Correct value of hours under sun', () => {
    expect(myFirstQuinoa.hs()).toBe(2);
});
//# sourceMappingURL=plant.test.js.map