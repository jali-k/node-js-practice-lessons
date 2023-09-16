const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./index.html') // Read the file when initialize the server

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'content-type':'text/html'}) // Send meta data thrught the header (MIME type of the content)
    res.write(homePage)
    res.end()
})

server.listen(5000)

// Using just node JS we have to handle all the requests. Even the requests that is sent to get the resources files like styles.css
// Hence we use Exspress JS