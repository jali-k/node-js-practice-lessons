const http = require('http');

const server = http.createServer((req, res)=>{

    // req: is the request that client is sending us
    // res: is the response we are sending back

    res.write("Hello, welcome to the basics for now");
    res.end();

})

server.listen(5000)

// at  localhost:5000 this show this message that we are writing