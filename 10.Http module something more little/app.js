const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end("The home page");
    }

    if (req.url === '/about') {
        res.write("See the about")
        res.end()
    }

    res.end("Oops!")
})

server.listen(5000);