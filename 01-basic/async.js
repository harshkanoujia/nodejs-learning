//Tasks run independently of each other, allowing the program to continue running while waiting for some tasks to complete.
//This is useful for tasks that need to wait for external resources, like network requests. Asynchronous programming is often used 
// by backend developers.

// const fs = require('fs');

// // Read a file asynchronously
// fs.readFile('example.txt', 'utf8', (err, data) => {           // Does not block execution
//     if (err) {
//         return console.error('Error reading file:', err);
//     }
//     console.log('File Content (Async):', data);
// });

// console.log('This comes immediately after starting the file read (Async).');


//Callback function
// setTimeout(()=>{
//     console.log("Hacking wifi ......... Please wait....")
// },1000)
// setTimeout(()=>{
//     console.log("Fetching username and  password ......... Please wait....")
// },2000)


// setTimeout(()=>{
//     console.log("Hacking Rahul's facebook id ......... Please wait....")
// },3000)
// setTimeout(()=>{
//     console.log("Hacking Rahul's Insta password ......... Please wait....")
// },4000)
// setTimeout(()=>{
//     console.log("Username and password of Rahul(+91 9454544454)fetched ......... Please wait....")
// },5000)