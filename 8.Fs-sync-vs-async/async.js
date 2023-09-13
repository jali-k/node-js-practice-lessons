// Here we use the Async method 
// Which is the non blockking way

const {readFile, writeFile} = require('fs');

console.log("start reading");

readFile('./content/firsttext.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(result);

    readFile('./content/secondtext.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;

        }

        const second = result;
        console.log(second);

console.log("start writing");


        writeFile('./content/async-result.txt', `The result is: ${first} and ${second}`, (err, result)=>{
            if (err) {
                console.log(err);
            }

            console.log(result);
        })
    })
})

console.log("Done all the tasks here and moving to the other file");

// Output order is: 

// start reading
// Done all the tasks here and moving to the other file
// This is the first text
// This is the second text
// start writing

// It starts reading and without waiting it goes to the next file while the tasks in this file still happening.
