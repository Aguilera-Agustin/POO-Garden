import { EcologicalPlot } from '../../../objects/plots/variety/ecological';
import { Quinoa } from '../../../objects/plants/quinoa';

const myFirstPlot:EcologicalPlot  = new EcologicalPlot({width:20, lengthy:1}, 8);
const plant1:Quinoa   = new Quinoa(2009, 1, 8);
const plant2:Quinoa   = new Quinoa(2009, 1, 8);
const plant3:Quinoa   = new Quinoa(2009, 1, 8);
const plant4:Quinoa   = new Quinoa(2009, 1, 8);

test('No complications',()=>{
    myFirstPlot.sow(plant1);
    myFirstPlot.sow(plant2);
    myFirstPlot.sow(plant3);
    myFirstPlot.sow(plant4);
    expect(myFirstPlot.hasComplications()).toBe(false)
})

test('Perfect plot',()=>{ 
    expect(plant1.perfectPlot(myFirstPlot)).toBe(true)
})

test('Good Asociation',()=>{ 
    expect(myFirstPlot.goodAssociation(plant1)).toBe(true)
})
 

