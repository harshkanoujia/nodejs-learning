const express = require('express')
const mongoose = require('mongoose')
const customer = require('./routes/customers')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

mongoose.connect('mongodb://localhost/exercise')
.then(() => console.log('MongoDb is connecting.....'))
.catch((err)=> console.error('Something is Wrong...',err.message))


app.use('/api/customer', customer) //here customer i.e because of we reload the customer module with this name

app.listen(port,()=> { 
    console.log(`Server is running on this ${port}...`)
});





