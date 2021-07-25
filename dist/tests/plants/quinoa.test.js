"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quinoa_1 = require("../../objects/plants/quinoa");
const myFirstQuinoa = new quinoa_1.Quinoa(2021, 5, 2);
const mySecondQuinoa = new quinoa_1.Quinoa(2010, 5, 12);
const myThirdQuinoa = new quinoa_1.Quinoa(2001, 5, 9);
test('Is not this Quinoa a Father plant?', () => {
    expect(myFirstQuinoa.isFather()).toBe(false);
});
test('Is this Quinoa a Father plant?', () => {
    expect(mySecondQuinoa.isFather()).toBe(true);
});
test('Is this Quinoa a Father plant?', () => {
    expect(myThirdQuinoa.isFather()).toBe(true);
});
//# sourceMappingURL=quinoa.test.js.map