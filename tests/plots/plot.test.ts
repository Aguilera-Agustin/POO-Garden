import { Plot } from '../../objects/plots/_plot';
import { EcologicalPlot } from '../../objects/plots/variety/ecological';
import { Soy } from '../../objects/plants/soy';
import { plotError } from '../../errors/plotError';


const myFirstPlot:Plot  = new EcologicalPlot({width:20, lengthy:1}, 8);
const soy1:Soy    = new Soy(2003, 2);
const soy2:Soy    = new Soy(2009, 2);
const soy3:Soy    = new Soy(2021, 3);
const soy4:Soy    = new Soy(2003, 3);
const soy5:Soy    = new Soy(2003, 3);

test('Correct value of surface',()=>{
    expect(myFirstPlot.surface()).toBe(20)
})

test('Correct sow',()=>{
    myFirstPlot.sow(soy1);
    myFirstPlot.sow(soy2);
    myFirstPlot.sow(soy3);
    myFirstPlot.sow(soy4);
    expect(myFirstPlot.plotPlants().length).toBe(4)
})

test('Incorrect sow',()=>{
    try {
        myFirstPlot.sow(soy5)
    } catch (error) {
        expect(error).toBeInstanceOf(plotError)
    }
})


