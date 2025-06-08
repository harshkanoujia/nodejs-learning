const EventEmitter = require('events'); //In this captial letter show the its Class that is EventEmitter  or  Importing the EventEmitter class from the 'events' module
const emitter = new EventEmitter();  // In this emitter it is object or Creating an instance (object) of the EventEmitter class 


//Without argument pass

// //Regester a listener 
// // 'on' method adds a listener for the 'messageLogged' event
// emitter.on('messageLogged', function () {   //In this Function = listener that will be called when the event is raised
//     console.log('Listener Called');// This code executes when the event is raised
// });

// //Raise an event
// //Triggers the 'messageLogged' event
// emitter.emit('messageLogged'); // Making a noise, produce - Signalling



// With argument pass

// Register a listener
// emitter.on('messageLogged', function (arg) { // 'on' method adds a listener for the 'messageLogged' event
//     console.log('Listener Called with:',arg); // This code executes when the event is raised
// });

// // Raise an event
// emitter.emit('messageLogged',{id:1, url:'http:example.com'});  // Emit the event with additional data




// Now in Es6 & Echma Script we have the feature called Arrow fuction

// emitter.on('messageLogged', (arg) => {   //This is called the Arrow function we prefer to use Arrow function
//     console.log('Listener Called with:',arg); 
// });

// // Raise an event
// emitter.emit('messageLogged',{id:1, url:'http:example.com'});  



// We add our own message which is logging and pass arg data in which user can 
// Register a listener for the 'logging' event

emitter.on('logging', (data) =>{ 
    console.log('Listener Called with:', data.message); 
});

// Raise the 'logging' event with data
emitter.emit('logging',{message: 'the message is Data'});  

