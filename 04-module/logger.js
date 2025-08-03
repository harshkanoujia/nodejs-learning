// This code runs with the help of app.js
// var url = 'http://mylogger.io/log';

// function log(message) {
//     //Send an HTTP request
//     console.log(message);
// }
// module.exports = log;


//--------------------------------------------------------------


// This part of code runs with ExtendEventEmitter.js
const EventEmitter = require('events');
var url = 'http://mylogger.io/log';


// in class starting with capital letter like Logger and we use EventEmitter which is parent or base class
class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}


module.exports = Logger;