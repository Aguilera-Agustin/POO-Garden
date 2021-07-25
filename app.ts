const fs = require('fs')
fs.readFile('public/plant.txt', (err: any, bfr: any)=>{
    if(!err){
        console.log(bfr.toString())
        console.log("Hi, my name is Agustin and i created this program for UNAHUR")
    }
    else{
        console.log(err)
    }
})
