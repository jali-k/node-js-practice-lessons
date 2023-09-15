const http = require('http');

const server = http.createServer()

// Each an every tyme we send a request to the searver, it emittes 'request', which we can listen and do whatever we want

server.on("request", (req, res)=>{
    console.log("Data received");
    res.end("Home!")

})

server.listen(5000);