"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const industrial_1 = require("../../../objects/plots/variety/industrial");
const quinoa_1 = require("../../../objects/plants/quinoa");
const myFirstPlot = new industrial_1.IndustrialPlot({ width: 20, lengthy: 1 }, 8);
const plant1 = new quinoa_1.Quinoa(2009, 1, 20);
const plant2 = new quinoa_1.Quinoa(2009, 1, 20);
const plant3 = new quinoa_1.Quinoa(2009, 1, 20);
myFirstPlot.sow(plant1);
test('Strong Plant', () => {
    expect(plant1.isStrong()).toBe(true);
});
test('Good Association', () => {
    expect(myFirstPlot.goodAssociation(plant1)).toBe(true);
});
test('Bad Association', () => {
    myFirstPlot.sow(plant2);
    myFirstPlot.sow(plant3);
    expect(myFirstPlot.goodAssociation(plant1)).toBe(false);
});
//# sourceMappingURL=industrial.test.js.map