const exspress = require('express');

const app = exspress();

app.use(exspress.static('./public'))

app.use(exspress.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.status(200).json({success:true})
})

// POST

app.post("/login", (req, res)=>{
    const {name} = req.body; // To handle the POST request properly we have to use a middleware, that is urlencoded
    console.log(name);
    if(name){
       return res.status(200).send("Success")
    }else{
       return res.status(401).send("Please enter valid credentials")
    }
})



app.listen(5000, ()=>{
    console.log("Server started and running on port 5000");
})