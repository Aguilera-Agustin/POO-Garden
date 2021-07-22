import { Quinoa } from '../../objects/plants/quinoa';
import { Plant } from '../../objects/plants/_plant';


const myFirstQuinoa:Plant  = new Quinoa(2021, 5, 2);


test('Correct value of years',()=>{
    expect(myFirstQuinoa.getYear()).toBe(2021)
})

test('Correct value of height',()=>{
    expect(myFirstQuinoa.getHeight()).toBe(5)
})

test('Correct value of hours under sun',()=>{
    expect(myFirstQuinoa.hs()).toBe(2)
})
