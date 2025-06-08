const EventEmitter = require('events');
// it will run with the help of logger.js 

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg)=>{
    console.log('Listener called', arg);
});

logger.log('message');




//---------------------------------------------
// // This is the code of chatgpt which explain this 

// // Create a custom class that extends EventEmitter
// class Logger extends EventEmitter {
//     log(message) {
//         // Log a message (your custom logic)
//         console.log('Message:', message);

//         // Raise an event
//         this.emit('messageLogged', { id: 1, text: message });
//     }
// }

// // Create an instance of Logger
// const logger = new Logger();

// // Register a listener for the 'messageLogged' event
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called:', arg);
// });

// // Call the log method, which emits an event
// logger.log('Hello, World!');
