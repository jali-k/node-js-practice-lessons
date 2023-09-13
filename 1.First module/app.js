// This is the nodejs app we are running and we import other files properties somehow.

// We need to import here the things that we exported

// That can be done with require global

const names = require("./people")
const sayHi = require("./talk")

console.log(names);
console.log(sayHi);

sayHi(names.john); // "Hi john"
sayHi(names.peter); // "Hi peter"