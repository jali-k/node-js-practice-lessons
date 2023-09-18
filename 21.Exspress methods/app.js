const exspress = require('express');

const app = exspress();

app.use(exspress.static('./public'))

const {countries} = require('./data');

app.use(exspress.urlencoded({extended: false})) // handle POST requests body. Handle data in the trype "application/x-www-form-urlencoded"
app.use(exspress.json()); // Handle the data in the type "application/json"

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


app.put("/change/:id", (req, res)=>{
   
    const {id} = req.params;
    const {title} = req.body;
    
    console.log(id);
    console.log(req.body);
    if (id) {

        const selectedCountry = countries.find((country) => country.id == Number(id));

        selectedCountry.title = title

        return res.status(200).send(selectedCountry)
    }
    res.status(401).send("No id there");
})


app.delete("/change/:id", (req, res)=>{
   
    const {id} = req.params;

    
    console.log(id);

    if (id) {

        const selectedCountry = countries.find((country) => country.id == Number(id));

        if (!selectedCountry) {
            return res.status(404).send(`No country with that id: ${id}`)
        }

        const newCountries = countries.filter((country) => country.id !== Number(id));

    

        return res.status(200).json(newCountries);
    }
    res.status(401).send("No id there");
})



app.listen(5000, ()=>{
    console.log("Server started and running on port 5000");
})