// This is the nodejs app we are running and we import other files properties somehow.

// We need to import here the things that we exported

// That can be done with require global

const peopleData = require("./people") // { people: { john: 'john', peter: 'peter' } }
const {people} = require("./people") // Destructure the object
const sayHi = require("./talk")

console.log(peopleData.people.john);
console.log(people.john); // Using destructred onbject O/p ->"john"
console.log(sayHi);


sayHi.talk(people.john); // Hi john