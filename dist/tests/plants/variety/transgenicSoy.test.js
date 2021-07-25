"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soy_1 = require("../../../objects/plants/soy");
const transgenicSoy_1 = require("../../../objects/plants/variety/transgenicSoy");
const myTransgenicSoy = new transgenicSoy_1.TransgenicSoy(2021, 3);
const mySoy = new soy_1.Soy(2021, 3);
test('Is this Soy a Father plant?', () => {
    expect(myTransgenicSoy.isFather()).toBe(false);
});
test('Is this Soy a Father plant?', () => {
    expect(mySoy.isFather()).toBe(true);
});
//# sourceMappingURL=transgenicSoy.test.js.map