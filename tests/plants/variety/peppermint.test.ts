import { PepperMint } from '../../../objects/plants/variety/peppermint';
import { Mint } from '../../../objects/plants/mint';


const myPeppermint:PepperMint  = new PepperMint(2021, 5);
const myMint:Mint              = new Mint(2021, 5);


test('Correct value of size',()=>{
    expect(myPeppermint.size()).toBe(myMint.size()*2) 
})

