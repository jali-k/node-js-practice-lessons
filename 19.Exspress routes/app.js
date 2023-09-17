const express = require('express');

const app = express();

// send all data
app.get("/", (req, res)=>{
    const products = require('./data');
    res.json(products);
})

// Send product list without the descrition
app.get("/list", (req, res)=>{
    const {products} = require('./data');

    newProducts = products.map((product) => {
        const {id, title} = product;
        return {id, title};
    });

    res.json(newProducts);

    res.json(products);
});

// Send specific product with product id Params
app.get("/:productId", (req, res) => {
    const {products} = require('./data');
    const reqId = req.params.productId // This is always a string
    const singleProduct = products.find((product) => product.id == Number(reqId));

    res.json(singleProduct);

});

// Query string paarmeters

app.get("/products/query", (req, res) => { // word "query" is needed there in the url
 let products = require('./data').products;

    const {search, limit} = req.query;
    console.log(req.query);

    // Search with title starting letter
    if (search) {
       products = products.filter((product) => product.title.startsWith(search))

      // Always return inside conditional statements if it ends there
    }

    // Limits the number of objects
    if (limit) {
        products = products.slice(0, Number(limit));
        console.log(limit);
    }

    res.json(products)
})



app.listen(5000, ()=>{
    console.log("Server running on port 5000");
})