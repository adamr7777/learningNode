const logEvents = require('./eventsLog');
const Emitter = require('events');


class MyEmitter extends Emitter {}
const myEmitter = new MyEmitter();


setInterval(()=> {
    myEmitter.emit('log', 'the event emmited!')
}, 3000);

myEmitter.on('log', (message)=> logEvents(message));

// let num = 1
// setInterval(()=> {
//     if(num > 10) return; 
//     logEvents(`this is the message number ${num}`);
//     num++;
//     console.log('working');
// },2000);
