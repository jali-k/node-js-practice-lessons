// Previously we read files all in one and assigned to a single variable.

// But with streams we can read data in chuncks!

// This is also connected with event emitters

const {createReadStream} = require('fs');

// With "createReadStream" we can create a stream

const stream = createReadStream('./big-text.txt');


// This stream emit events of "data"

// Each emit contains 64KB of data (default)

stream.on('data', (data)=>{
    console.log(data);
})

// This can be useful when you are sending large amount of data over a http response, you can chunck the file and send part by part 