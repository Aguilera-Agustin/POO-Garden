"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ecological_1 = require("../../objects/plots/variety/ecological");
const soy_1 = require("../../objects/plants/soy");
const plotError_1 = require("../../errors/plotError");
const myFirstPlot = new ecological_1.EcologicalPlot({ width: 20, lengthy: 1 }, 8);
const mySecondPlot = new ecological_1.EcologicalPlot({ width: 1, lengthy: 20 }, 8);
const soy1 = new soy_1.Soy(2003, 0.1);
const soy2 = new soy_1.Soy(2009, 2);
const soy3 = new soy_1.Soy(2021, 3);
const soy4 = new soy_1.Soy(2003, 3);
const soy5 = new soy_1.Soy(2003, 3);
test('Correct value of surface', () => {
    expect(myFirstPlot.surface()).toBe(20);
});
test('Max quantity - Capacity', () => {
    expect(myFirstPlot.capacity()).toBe(myFirstPlot.size().width / 5);
});
test('Max quantity - Capacity', () => {
    expect(mySecondPlot.capacity()).toBe(mySecondPlot.size().lengthy / 3 + mySecondPlot.size().lengthy);
});
test('Correct sow', () => {
    myFirstPlot.sow(soy1);
    myFirstPlot.sow(soy2);
    myFirstPlot.sow(soy3);
    myFirstPlot.sow(soy4);
    expect(myFirstPlot.plotPlants().length).toBe(4);
});
test('Has complications', () => {
    expect(myFirstPlot.hasComplications()).toBe(true);
});
test('Incorrect sow', () => {
    try {
        myFirstPlot.sow(soy5);
    }
    catch (error) {
        expect(error).toBeInstanceOf(plotError_1.plotError);
    }
});
//# sourceMappingURL=plot.test.js.map