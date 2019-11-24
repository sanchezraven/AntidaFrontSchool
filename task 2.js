let a;
console.time(a);

const path = require("path");
const fs = require("fs");

let fileName = 'Hello   world!            NodeJS          RULES!.txt';
let extension = path.extname(fileName);
let file = path.basename(fileName, extension);
let correctName = file.replace(/\s+/g," ");

fs.writeFile('converted_'+ correctName +'.txt', 'lol', function(error){});

console.timeEnd(a);