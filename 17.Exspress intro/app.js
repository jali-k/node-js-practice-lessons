// require exspress

const exspress = require('express')

const app = exspress()

// Several methods with this app
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.listen

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Home</h1>") // Chaining the status code is optional. But it can be important like, when you access app.all()
})

app.get("/about", (req, res)=>{
    res.status(200).send("<h1>About</h1>")
})

// When no route found for the request
app.all("*", (req, res)=>{
   res.status(404).send("Page not found")
})

app.listen(5000, ()=>{
    console.log("Server is listening at port 5000");
})