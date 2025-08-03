const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const genres = require('./routes/genres');

app.use(express.json());


app.use('/api/genres', genres);

app.listen(port, () => console.log(`Server is listen on ${port}..`));  // this is where the port is running 
