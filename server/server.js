//Import necessary modules
//dotenv to get access to local .env file
require('dotenv').config();

//express
const express = require('express');
const app = express();

//CORS to allow client side access.
const cors = require('cors');

//Import routes

//Import PORT
const PORT  = process.env.PORT || 8080

app.use(cors());
//Use JSON middleware
app.use(express.json());

//Routes

//Set up port to listen on
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})