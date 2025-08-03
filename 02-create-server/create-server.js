const express = require("express")
const app = express()                               // Initialize an Express app using const app = express().
const port = process.env.PORT || 5000


app.get("/",function(req,res){                      // while this is succesfully run on postman the url is http://localhost:5000/ and request is Get 
    // res.status(200);
    res.send("This is home")
    // res.send(req.body)                           // This is the "req.body" in which if user submit any data then we receive it in the postman  
})                                                  // like { name: Harsh, rollno: 15} then we will recieve this data 

app.get("/register/:id",function(req,res){          // In this we are passing the parameter and wtih the help of `req.params` we get it  
    res.send(req.params)                            // this will test in postman so that we will get the id
})

app.get("/register/:id",function(req,res){          // now we add the query so now we add the some query in url 
    res.send(req.query)                             // http://localhost:5000/register/home?name=param like this in which i pass only one parmeter and the query return this 
})                                                  // http://localhost:5000/register/home?name=Harsh&age=21  now in this URL we pass two parameter and '&' it is the parameter seprator

app.post("/contact",function(req,res){
    res.send("This is only contact.")
})

app.get("/about",function(req,res){                 // this will run on postman the url is http://localhost:5000/about and request is Get 
    res.send("Hello Harsh")
})

app.get("/home",function(req,res){                  // this will run on postman the url is http://localhost:5000/home and request is Get
    res.send("Hello home")                          // res.set('Content-Type', 'text/html');
    res.status(200)                                 // res.send("<h1>Hello GFG Learner!</h1>");
})// .listen(5000) 

app.put("/home",function(req,res){
    res.send("This is new home.")
})

app.delete("/about",function(req,res){
    res.send("The about section is deleted")
})

// app.listen(port,()=>{
//     console.log(`the server running on this ${port}`)
// })

app.listen(port, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running,and App is listening on port ${port}`)
    else 
        console.log("Error occurred, server can't start", error);
    }
);



















// "middleware to handle the http request and response web framework for nodejs using web application and mobile application help us to "















// // const http = require('http');

// // const server = http.createServer((request, response) => {
// //   // magic happens here!
// //   console.log("Harsh");
// // }).listen(5000);

// var http = require("http")

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   }).listen(8080);

// // In-memory data store (for simplicity, we'll use an array)
// let items = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" }
// ];

// app.get('/api/items', (req, res) => {
//       res.send(items);
//     });

    






























// // 1. Create (POST)
// app.post('/api/items', (req, res) => {
//   const newItem = {
//     id: items.length + 1,
//     name: req.body.name
//   };
//   items.push(newItem);
//   res.status(201).send(newItem); // 201 = Created
// });

// // 2. Read (GET all)
// app.get('/api/items', (req, res) => {
//   res.send(items);
// });

// // 3. Read (GET one by ID)
// app.get('/api/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Item not found');
//   res.send(item);
// });

// // 4. Update (PUT)
// app.put('/api/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Item not found');

//   item.name = req.body.name; // Update the name
//   res.send(item);
// });

// // 5. Delete (DELETE)
// app.delete('/api/items/:id', (req, res) => {
//   const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
//   if (itemIndex === -1) return res.status(404).send('Item not found');

//   const deletedItem = items.splice(itemIndex, 1); // Remove the item
//   res.send(deletedItem);
// });


















