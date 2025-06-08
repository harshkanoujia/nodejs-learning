//this page is in handling Http get request , POST request, PUT request , DELETE request
//after the app.js file


const express = require('express');       
const Joi = require('joi');   //The most powerful schema description language and data validator for JavaScript. and also 'Joi' the capital letter because what we return this module is class and we using it in app.post() and app.put()

const app = express();         

//so when we call 'express.json()' this method returns peice of middleware and then we call 'app.use' to use that middleware in request processing pipeline
app.use(express.json()); // Is a middleware that use when we add app.post() 

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
];

//-------GET Method -------------------------------------------------------------------------------------------------------------------------
// Req.body use 
// app.get("/",(req,res)=>{                      // while this is succesfully run on postman the url is http://localhost:5000/ and request is Get 
//   res.send(req.body)                          //This is the "req.body" in which if user submit any data then we receive it in the postman  
// })                                            //like { name: Harsh, rollno: 15} then we will recieve this data 
//-----------------------------------------------------
//Req.params use
// app.get("/register/:id",(req,res)=>{          // In this we are passing the parameter and with the help of `req.params` we get it  
//   res.send(req.params)                        // this will test in postman so that we will get the id
// })
//-----------------------------------------------------
//Req.query use
// app.get("/register/:id",(req,res)=>{          //now we add the query so now we add the some query in url 
//   res.send(req.query)                         // http://localhost:5000/register/home?name=param like this in which i pass only one parmeter and the query return this 
// })                                            //http://localhost:5000/register/home?name=Harsh&age=21  now in this URL we pass two parameter and '&' it is the parameter seprator


app.get('/',(req,res) =>{           
  res.send('Hello World!!!!');          
});                                  

app.get('/api/courses', (req,res) => {   // when we hit the url for this it will print all the array
  res.send(courses);
});

// ----------GET Mehtod and use for finding the course array --------------------------------------------------------------------------------------------------------------------------------
// /api/courses/1  || Handling GET request 
app.get('/api/courses/:id',(req,res) => {                                        //now we use some logic here 
  const course = courses.find(c => c.id === parseInt(req.params.id))             // basically we put {courses.find(c => c.id === parseInt(req.params.id)} this logic so that when any body search for any particular courses it will show that course and any wrong no. will display an error message 
  if(!course) return res.status(404).send('The course with the given ID was not found ') //404 that is object can not find // Also the 'c=>' it determines the boolean c.id === parseInt(req.params.id) 
    res.send(course);                                                            //parseInt() is global function in javascript Because 'c => c.id ===(req.params.id)' returns string so that the reason we use 'parseInt()'to change to string to number
});

//-------------POST Method----------------------------------------------------------------------------------------------------------------------------------------------

// //Handling POST request 
// app.post('/api/courses',(req,res) =>{   // 'api/courses' the courses fuller name is because of we post the collection of courses
//   const course = {                      //(req,res) this is basically a route handler
//     id : courses.length + 1,            // here we are not working with database so we are manually give the data
//     name: req.body.name                 // 'id' asign manually in future when we working with database the id will be assign by database
//   };                                    // 'req.body.name' so actually we assume that in body we have name so we requesting the name and also this feature does not work alone that why we need middleware
//   courses.push(course);                 // we push a new object in an array with '.push' method    
//   res.send(course);                     // Basically we use this to one more element to an array
// })

//-----------------------------------------------

//Handling Input Validation
app.post('/api/courses',(req,res) =>{         //now install 'Joi' and  we need to log this module on the top
  // const schema = Joi.object({               // Now we have to create an Joi.object function and then it will work   
  //   name: Joi.string().min(3).required()    // in previous version we can do like (const schema = { name: Joi.string().min(3).required()};)
  // });

  // now we use the function so that why we commenting this lines
  const {error} = validateCourse(req.body)            // This validateCourse function is defined below  

   // Validate the request body against the schema    //We use the function that why we commenting the error
   //const {error} = schema.validate(req.body);       //In Previous version Joi.validate will work on the place of schema.validate but now it not a function 
  //  console.log(result)                             // Previous code is 'const result = Joi.validate(req.body,schema); and console.log(result);'

   if (error) {                                   // we not using this if we want to use this at the place of const result we change to {error}
     // 400 Bad Request with error message        // this code is by chatgpt
     res.status(400).send(error.details[0].message);
     return;
   }


  //manually validate
  // if(!req.body.name|| req.body.name.length < 3){
  //   //400 Bad Request
  //   res.status(400).send('Name is required and should me minimum 3 char')
  //   return;
  // }
  
    //now it using the Joi and validate the error message
    // if(result.error){
    //   //400 Bad Request
    //   res.status(400).send(result.error.details[0].message);  //send(result.error) this provide error but we provide details[0].message so it will easy to read by client 
    //   return;
    // }

  
  const course = {                      
    id : courses.length + 1,            
    name: req.body.name                 
  };                                    
  courses.push(course);                     
  res.send(course);                    
});

//--------PUT Method---------------------------------------------------------------------------------------------------------------------------------

app.put('/api/courses/:id',(req,res) => {
     // Logic we are buliding for this update request is:    1( Look up the course,If not existing, return 400 - Bad request ) , 2(Validate ,If not existing, return 400 - Bad request ), 3 (Update course, Return the updated course)
     // Look up the course
     // If not existing, return 400 - Bad request 
     const course = courses.find(c => c.id === parseInt(req.params.id))             
     if(!course) return res.status(404).send('The course with the given ID was not found ')
     
    //  //Validate 
    //  //If invalid, return 400- Bad request 
    //  const schema = Joi.object({               
    //   name: Joi.string().min(3).required()  
    // });
    //const {error} = schema.validate(req.body);

    //Now we have create a function and we use this function here so that upper lines are commenting 
    
    const {error} = validateCourse(req.body);  // now this {error} is object destructor and we use in this 
    if (error) {   
     res.status(400).send(error.details[0].message);
     return;
   }
    
     //Update course
     course.name = req.body.name;
     res.send(course);
     //Return the updated course 
})

function validateCourse(course){
  const schema = Joi.object({               
    name: Joi.string().min(3).required()  
  });
  return schema.validate(course);
}

//------DELETE Method---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.delete('/api/courses/:id',(req,res) => {
    //now the logic is: 1(Look up the course,not existing , return 404), 2 (Delete) , 3(Return the same course)
    // Look up the course
    //not existing , return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found ');

    //Delete 
    const index = courses.indexOf(course);
    courses.splice(index, 1); // splice() method in JavaScript is a versatile array method used for adding, removing, or replacing elements in an array
    //Return the same course
    res.send(course);
});



//-------PORT--------------------------------------------------------------------------------------------------------

//PORT   to set the environment variable we use the ($env:PORT=3000) in terminal to set value
const port = process.env.PORT || 5000;   //process.env.PORT is an environment variables || 5000 is not working on when we deploy a project so this is important   
app.listen(port, () => console.log(`Listening the port ${port}`))



