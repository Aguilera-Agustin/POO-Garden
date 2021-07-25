"use strict";
const fs = require('fs');
fs.readFile('public/plant.txt', (err, bfr) => {
    if (!err) {
        console.log(bfr.toString());
        console.log("Hi, my name is Agustin and i created this program for UNAHUR");
    }
    else {
        console.log(err);
    }
});
//# sourceMappingURL=app.js.map