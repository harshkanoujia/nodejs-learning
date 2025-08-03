// var http = require("http")

// var dt = require('./basics');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);


// //if we hit the url and anything then it show on browser the function tells .url which means the what we hit the url it changes

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   //Return the url part of the request object:
//   res.write(req.url);
//   res.end();
// }).listen(8080);


// http://localhost:8080/?year=2024&month=Dec  you have to input the query string to get output

// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);



// // HTTP MODULE
// const http = require("http")
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello Harsh');
//     res.end();
//   }

//   if (req.url === '/api/courses') {        // req.url is allowing to rewrite in url
//     res.write(JSON.stringify([1, 2, 3]));  //convert a JavaScript object into a string with JSON.stringify().
//     res.end();
//   }
// });

// server.on('connection', (Socket) => {
//   console.log("Connection ... ")
// });

// server.listen(5000);

// console.log("Listening on port 5000")