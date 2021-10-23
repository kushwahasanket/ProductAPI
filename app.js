
//get all the libraries and variable declaraion
const express = require('express')
const app = express()
const mongoose = require("mongoose");

// set up the required middleware
const bodyParser = require("body-parser");
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//set up the server
require('dotenv').config()

const url = process.env.DATABASE_URL
const port = process.env.PORT || 3000;

//set up DB connection
mongoose.connect(url).then(() => console.log("DB Connected"));

// get routes
const product = require('./routes/productRoutes')
const category = require("./routes/categoryRoutes")

app.use('/api/product', product)
app.use('/api/category',category)

module.exports = app.listen(port,()=>{
    console.log("!server up and running!")
})

