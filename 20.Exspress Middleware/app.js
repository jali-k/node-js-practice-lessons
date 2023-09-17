const express = require('express');

const app = express();

const logger = require('./logger');

// req => middleware => res

app.use(logger);
// app.use('/api',logger); to add this middleware only to specific urls
// app.use([logger, autherize]); to add more than one middlewares
// Order matters
// Need to be above the routes


app.get("/", (req, res)=>{
    res.send("home");
})

app.get("/about", (req, res)=>{
    res.send("about");
})

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})