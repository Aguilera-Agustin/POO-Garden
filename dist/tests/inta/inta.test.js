"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inta_1 = require("../../objects/inta/inta");
const ecological_1 = require("../../objects/plots/variety/ecological");
const soy_1 = require("../../objects/plants/soy");
const myInta = new inta_1.Inta();
const myFirstPlot = new ecological_1.EcologicalPlot({ width: 920, lengthy: 1 }, 6);
const mySecondPlot = new ecological_1.EcologicalPlot({ width: 301, lengthy: 20 }, 6);
const soy1 = new soy_1.Soy(2003, 0.1);
const soy2 = new soy_1.Soy(2009, 0.1);
const soy3 = new soy_1.Soy(2021, 0.1);
const soy4 = new soy_1.Soy(2003, 3);
const soy5 = new soy_1.Soy(2003, 0.1); //5 perfects
const soy6 = new soy_1.Soy(2009, 2);
const soy7 = new soy_1.Soy(2021, 3);
const soy8 = new soy_1.Soy(2003, 3);
const soy9 = new soy_1.Soy(2003, 0.1); //1 perfect
const soy10 = new soy_1.Soy(2003, 3);
myFirstPlot.sow(soy1);
myFirstPlot.sow(soy2);
myFirstPlot.sow(soy3);
myFirstPlot.sow(soy4);
myFirstPlot.sow(soy5);
mySecondPlot.sow(soy6);
mySecondPlot.sow(soy7);
mySecondPlot.sow(soy8);
mySecondPlot.sow(soy9);
mySecondPlot.sow(soy10);
myInta.addPlot(myFirstPlot);
myInta.addPlot(mySecondPlot);
test('Correct average', () => {
    expect(myInta.plantsAverage()).toBe(5);
});
test('Most Self Sustaining', () => {
    expect(myInta.mostSelfSustaining().size().width).toBe(920);
});
//# sourceMappingURL=inta.test.js.map