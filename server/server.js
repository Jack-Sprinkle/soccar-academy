//dotenv to get access to local .env file
require('dotenv').config();

//express
const express = require('express');
const app = express();

//CORS to allow client side access.
const cors = require('cors');

//Import routes
const userRoutes = require('./routes/users');
const coachRoutes = require('./routes/coach');
const mmrRoutes = require('./routes/mmr');

//Import PORT
const PORT  = process.env.PORT || 8080

app.use(cors());
//Use JSON middleware
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);
app.use('/coaches', coachRoutes);
app.use('/mmr', mmrRoutes);

//Set up port to listen on
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})