const http = require('http');



const server = http.createServer((req, res)=> {
    res.end('hello');
});
// server.listen(3000);
// const eventEmitter = require('events');
// const myEventEmitter = new eventEmitter();

// myEventEmitter.on('message', ()=> {
//     console.log('message received!');
// });

// myEventEmitter.emit('message');


