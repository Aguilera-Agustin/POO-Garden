"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ecological_1 = require("../../../objects/plots/variety/ecological");
const quinoa_1 = require("../../../objects/plants/quinoa");
const myFirstPlot = new ecological_1.EcologicalPlot({ width: 20, lengthy: 1 }, 8);
const plant1 = new quinoa_1.Quinoa(2009, 1, 8);
const plant2 = new quinoa_1.Quinoa(2009, 1, 8);
const plant3 = new quinoa_1.Quinoa(2009, 1, 8);
const plant4 = new quinoa_1.Quinoa(2009, 1, 8);
test('No complications', () => {
    myFirstPlot.sow(plant1);
    myFirstPlot.sow(plant2);
    myFirstPlot.sow(plant3);
    myFirstPlot.sow(plant4);
    expect(myFirstPlot.hasComplications()).toBe(false);
});
test('Perfect plot', () => {
    expect(plant1.perfectPlot(myFirstPlot)).toBe(true);
});
test('Good Association', () => {
    expect(myFirstPlot.goodAssociation(plant1)).toBe(true);
});
//# sourceMappingURL=ecological.test.js.map