import { IndustrialPlot } from '../../../objects/plots/variety/industrial';
import { Quinoa } from '../../../objects/plants/quinoa';

const myFirstPlot:IndustrialPlot  = new IndustrialPlot({width:20, lengthy:1}, 8);
const plant1:Quinoa   = new Quinoa(2009, 1, 20);
const plant2:Quinoa   = new Quinoa(2009, 1, 20);
const plant3:Quinoa   = new Quinoa(2009, 1, 20);

myFirstPlot.sow(plant1);

test('Strong Plant',()=>{
    expect(plant1.isStrong()).toBe(true)
})

test('Good Association',()=>{
    expect(myFirstPlot.goodAssociation(plant1)).toBe(true)
})

test('Bad Association',()=>{
    myFirstPlot.sow(plant2);
    myFirstPlot.sow(plant3);
    expect(myFirstPlot.goodAssociation(plant1)).toBe(false)
})

