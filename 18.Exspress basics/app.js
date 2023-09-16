const exspress = require('express');

const app = exspress();


app.use(exspress.static("./public"))

// Here, we don't even need to set up the home route
// Index.html is used as home with it's other resources as default

// Otherwise we have to setup sendFile also  (when we send html and other resources are in the public directory)

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
});