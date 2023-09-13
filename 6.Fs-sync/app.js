const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/firsttext.txt', 'utf8')
const second = readFileSync('./content/secondtext.txt', 'utf8')

console.log(first);
console.log(second);

writeFileSync('./content/result.txt', `The result is: \n ${first} ${second}`)