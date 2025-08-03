//here we only have main app and the all routes in another folder

const mongoose = require('mongoose')                    // reload the mongoose module in app
const express = require("express");                     // reload the express module in app
const app = express();                                  // it uses because we use app in this file
const genres = require('./routes/vidly-project')        // reload the vidlyProject module in main app 
app.use(express.json());                                // middleware

const port = process.env.PORT || 8080;                  // the port where the project is running


mongoose.connect('mongodb://localhost/vidly')           // connect mongoose with mongodb and we can define the schema and model in vidlyProject where our all routes
    .then(() => console.log('MongoDb is connected...'))
    .catch((err) => console.error(err.message))


app.use('/api/genres', genres)                          // this is an middleware where it defines the genres to the route and in another module we have not to use this route because this is our home root


app.listen(port, () => console.log(`Server is listen on ${port}..`));