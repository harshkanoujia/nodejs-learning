// In this file we using middleware directly and creating our own custom middleware , biuld in middleware, third party middleware, Environment variables, and Configuration

const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require("express");
const app = express();


// -----Template Engine-----------------------------------------------------------------------------------------------------------------------------------------------
app.set('view engine', 'pug')   // When we buliding restful sevices of backend of your client applications we do not need the view engine or template engine
app.set('views', './views');    // default

// ------Environment Variable------------------------------------------------------------------------------------------------------------------------------------------
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

// ----Middelware-------------------------------------------------------------------------------------------------------------------------------
app.use(express.json());

// now we geting warning so that we can change the (body-parser deprecated undefined extended: provide extended option middleware.js:7:17)
// {extended:true} without this we can see the warning body-parser
app.use(express.urlencoded({ extended: true }));    // this middleware function is parses the incoming request with urlencoded like(key=value&key=value)
// extended: true : Allows parsing of nested objects or rich data structures using the qs library.Example: key1[subkey]=value → { key1: { subkey: 'value' } }
// extended: false: Only allows parsing of simple key-value pairs using the querystring library.  Example: key=value&key2=value2 → { key: 'value', key2: 'value2' }


// -----------This is for serve static files-----------------------------------------------------
app.use(express.static('public'))

// this is for if the public folder is in parent folder
// app.use(express.static('../public'))


// ------Use of Third party middleware -----------------------------------------------------------------
app.use(helmet());
app.use(morgan('tiny')); //use for third party module and now it uses for enviroment variables


// ------Configuration------------------------------------------------------------------------------------------------------
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));



// ---use of environment variables-------------------------------------------------
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...')        // to set an enviroment variable in powershell ($env:NODE_ENV = "production")
}


/* ---------This--code--is--for--creating--custom--middleware-------logger.js--and--authenticate.js--files--are--used--in--this--middleware----------------------------------------------------------------
const logger = require('./middleware/logger')               // import it here which we are creating  
const authenticate = require("./middleware/authenticate")   // improt it here which we are creating


app.use(express.json());    // Built in Middleware  //Middleware  Now in this case we have two middleware functions (json() and route())

app.use(logger);            // creating custom middleware 
app.use(authenticate);      // creating custom middleware


app.use(function (res, req, next) {   // First we are using middleware directly by passing one function
    console.log('Logging...');
    next();
})

app.use(function (req, res, next) {    // Same as we are using the middleware this time we are not import on the top because we using there
    console.log("Authenticating...");
    next();
})
*/



const port = process.env.PORT || 8080;

const genre = [
    { id: 1, movie: "Action" },
    { id: 2, movie: "Thriller" },
    { id: 3, movie: "Horror" }
]

app.get("/", (req, res) => {              //  This is the example of middileware: Route handler function " (req,res) =>{  res.send("Welcome On Genre"); });"
    res.render('index', { title: 'My Express App', message: 'Hello' }); // This is used for Template engine to view more
    // res.send('Hello World');      
});


app.get("/api/genre", (req, res) => {
    res.send(genre);
});

app.post("/api/genre", (req, res) => {
    const name = {                         // the logic of check the string,min and required we are not put that code in this 
        id: genre.length + 1,
        movie: req.body.movie
    };
    genre.push(name);

    res.send(genre);
});


app.listen(port, () => console.log(`Server is listen on ${port}`));