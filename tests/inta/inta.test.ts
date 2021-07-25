import { Inta } from '../../objects/inta/inta';
import { Plot } from '../../objects/plots/_plot';
import { EcologicalPlot } from '../../objects/plots/variety/ecological';
import { Soy } from '../../objects/plants/soy';

const myInta: Inta = new Inta();
const myFirstPlot: Plot = new EcologicalPlot({ width: 920, lengthy: 1 }, 6);
const mySecondPlot: Plot = new EcologicalPlot({ width: 301, lengthy: 20 }, 6);
const soy1: Soy = new Soy(2003, 0.1);
const soy2: Soy = new Soy(2009, 0.1);
const soy3: Soy = new Soy(2021, 0.1);
const soy4: Soy = new Soy(2003, 3);
const soy5: Soy = new Soy(2003, 0.1);       //5 perfects
const soy6: Soy = new Soy(2009, 2);
const soy7: Soy = new Soy(2021, 3);
const soy8: Soy = new Soy(2003, 3);
const soy9: Soy = new Soy(2003, 0.1);       //1 perfect
const soy10: Soy = new Soy(2003, 3);

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
    expect(myInta.plantsAverage()).toBe(5)  
})

test('Most Self Sustaining', () => {
    expect(myInta.mostSelfSustaining().size().width).toBe(920)
})