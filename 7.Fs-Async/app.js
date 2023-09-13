// Here we use the Async method 

const {readFile, writeFile} = require('fs');

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

        writeFile('./content/async-result.txt', `The result is: ${first} and ${second}`, (err, result)=>{
            if (err) {
                console.log(err);
            }

            console.log(result);
        })
    })
})