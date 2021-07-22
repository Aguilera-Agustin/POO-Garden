import { Soy } from '../../../objects/plants/soy';
import { TransgenicSoy } from '../../../objects/plants/variety/transgenicSoy';


const myTransgenicSoy:TransgenicSoy  = new TransgenicSoy(2021, 3);
const mySoy:Soy                      = new Soy(2021, 3);


test('Is this Soy a Father plant?',()=>{
    expect(myTransgenicSoy.isFather()).toBe(false)
})

test('Is this Soy a Father plant?',()=>{
    expect(mySoy.isFather()).toBe(true)
})

