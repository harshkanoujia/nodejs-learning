const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);  // this is the way of concatation method but now we use Template string in Ecmascript
// console.log('Free Memory: ' + freeMemory);   


//Template string
//ES6/ ES2015 : ECMAScript6
console.log(`Total Memory : ${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);    // on this we have to use backticks which  ` ` like this 
console.log(`Free Memory : ${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB}`);     // total and free memory in bytes and we have change to GB
