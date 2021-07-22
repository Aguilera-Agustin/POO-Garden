import { Quinoa } from '../../objects/plants/quinoa';


const myFirstQuinoa  :Quinoa = new Quinoa(2021, 5, 2);
const mySecondQuinoa :Quinoa = new Quinoa(2010, 5, 12);
const myThirdQuinoa  :Quinoa = new Quinoa(2001, 5, 9);


test('Is not this Quinoa a Father plant?',()=>{
    expect(myFirstQuinoa.isFather()).toBe(false)
})

test('Is this Quinoa a Father plant?',()=>{
    expect(mySecondQuinoa.isFather()).toBe(true)
})

test('Is this Quinoa a Father plant?',()=>{
    expect(myThirdQuinoa.isFather()).toBe(true)
})
