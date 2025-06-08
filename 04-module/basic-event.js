const EventEmitter = require('events');   // Import the EventEmitter class

const emitter = new EventEmitter(); // Create an event emitter (like the doorbell)

// Set up a listener for the 'doorbellRang' event
emitter.on('doorbellRang', () => {
    setTimeout(()=>{console.log('Someone is at the door!');}, 1000)
});

// Emit the 'doorbellRang' event (ring the doorbell)
emitter.emit('doorbellRang');
