const fs = require('fs');

// Synchronous
// const files = fs.readFileSync('../Basic/example.txt', 'utf8');
// console.log(files);

// for read the directory 

// const files = fs.readdirSync('./');
// console.log(files);
// like agar koi or main basic topic agar rh gya to btaoo jo maine nhi sikha in detail

// ASynchronous
// fs.createReadStream('./example.txt', 'utf-8', function (err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
// })

// fs.readSync('./example.txt', 'utf-8', function (err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
// })

// for read the Directory
// fs.readdir('./', function (err, files) {         //fs.readdir is an async method 
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
// })


// console.log("Start");                        // it will print first because of first execution
// console.log("Before readdir()")              // it also print because 
// fs.readdir('./', function (err, files) {     // fs.readdir() starts to read the directory but does not block the program from running other code.
//   console.log("After readdir()")             // after the reading the directory it comes in the callback function and execute the code
//   if (err) console.log('Error', err);        // if the err then it show the err with the reason otherwise
//   else console.log('Result', files);         // the result [.....files] are shown 
// })
// console.log("End");                          // this will run when the fs.readdir file is reading the dir it will run because it execute first 


// Large file ko stream se read karna
const readStream = fs.createReadStream('example.txt', { encoding: "utf-8" });

readStream.on("data", (chunk) => {
  console.log("📜 Data chunk received:", chunk);
});

readStream.on("end", () => {
  console.log("✅ File read complete!");
});

// console.time("Loop Execution Time");
// for (let i = 0; i < 1; i++) { };
// console.timeEnd("Loop Execution Time");
