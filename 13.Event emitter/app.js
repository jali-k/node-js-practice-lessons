const EventEmitter = require('events');

const customEmitter = new EventEmitter();


// At first we need to listen to the event

customEmitter.on('response', ()=>{ // Note: this "on()" is to listen to the event
    console.log("Data receieved");
})

// You can add many callbacks 

customEmitter.on('response', ()=>{
    console.log("Data receieved yeah true");
})

// emit

customEmitter.emit('response'); // name should be matched "response"