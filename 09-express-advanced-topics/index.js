//In this file using Debugging 

const startupDebugger = require('debug')('app:startup');    // in project we not use two debugg functions
const dbDebugger = require('debug')('app:db');
// const debug = require('debug')('app:startup');   // like if the not using database and using only one function we use it

const morgan = require('morgan');
const express = require('express');

const app = express();


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
    // debug('Morgan enabled...'); // it use when we have only one debugg function and not have the database 
}


//Db work...
dbDebugger('Connected to the database...');     // this line will comment when there is no database 


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on the ${port}....`));