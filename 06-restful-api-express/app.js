// this whole page is in Express,Building Your First Web Server,install Nodemon,Environment Variables,Route Parameters

// Basically we dont use Http module because if you see CreateModule.js 
// there are routes and all routes have own if block

const express = require('express');       // now this returns a function called as express
const app = express();                    // now we call this function and now this returns object of type express, so we this object

// now this app object has bunch of useful methods
// app.get();  // all this methods are responds to HTTP verbs or HTTP method
// app.post();
// app.put();
// app.delete();


app.get('/', (req, res) => {            // So this method takes two arguments , the first argument is path or Url , and the second argument has the callback function
  res.send('Hello World!!!!');          // and the callback function has also two arguments (req,res)
});                                     // for more go express api reference docs and check the request 

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {     // now with this when we hit the route "/api/courses/:id" at the place of id put any no. then it shows it
  res.send(req.params.id)
});

app.get('/api/posts/:year/:month', (req, res) => {    // now we have two parameters 
  res.send(req.params)                                // now we read this parameter req this 
});

app.get('/api/posts/:year/:month', (req, res) => {    // now we have two parameters and query strings
  res.send(req.query)                                 // now when we hit a request on http://localhost:3000/api/posts/2018/5?sortBy=name it will show query strings 
});                                                   // remember the upper code is in comment other wise this request is hit and this output does not show 



//PORT   to set the environment variable we use the ($env:PORT=3000) in terminal to set value
const port = process.env.PORT || 8080;                            // process.env.PORT is an environment variables || 5000 is not working on when we deploy a project so this is important   
app.listen(port, () => console.log(`Listening the port ${port}`)) // if we include .env file then it run on it otherwise 5000 port running
