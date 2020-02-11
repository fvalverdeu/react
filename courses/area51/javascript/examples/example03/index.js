const {
    sum,
    sayHello,
    value
} = require("./sum") // El . debe ser incluido para que Node
// no busque el archivo en el core de Node.

const fs = require("fs");
const path = require('path');
const filePath = path.join(__dirname, "test.txt");
console.log(filePath);
const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

fs.writeFileSync(filePath, "But no!");

console.log(fs);

console.log('hola');

console.log(sum(value, 4));
console.log(sayHello());