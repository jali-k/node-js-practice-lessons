// This is the sync way. Which is the blocking way

const {readFileSync, writeFileSync} = require('fs')

console.log("starting read");

const first = readFileSync('./content/firsttext.txt', 'utf8')
const second = readFileSync('./content/secondtext.txt', 'utf8')

console.log("starting write");


console.log(first);
console.log(second);

writeFileSync('./content/result.txt', `The result is: \n ${first} ${second}`) 
console.log("Done all the tasks here and moving to the other file");

// Output order is: 

// starting read
// starting write
// This is the first text
// This is the second text
// Done all the tasks here and moving to the other file

// Do all the tasks and move to the next file.


