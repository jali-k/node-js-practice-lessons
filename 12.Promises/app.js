// In 7.Fs Async we have to call functions inside functions because the return value is only available inside the callback.
// But, we can use promisses to resolve this.
// we can await untill the promise is resolved and do the next thing as a promis

const {readFile, writeFile} = require('fs').promises // returns the result as a promise

const start = async () => {

const first = await readFile('./content/first.txt', 'utf8');
const second = await readFile('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

await writeFile('./content/result.txt', `THE RESULT IS: ${first} ${second}`)

}

start()