const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const EventEmitter = require('events');
const logEvents = require('./eventsLog');


class Emitter extends EventEmitter {}
const myEmitter = new Emitter();



// myEmitter.emit('log', 'the event emmited!')


// myEmitter.on('log', (message)=> logEvents(message));
const PORT = process.env.PORT || 3000;

const serveFile = async (filePath, response, url)=> {
    const extension = path.extname(url);
    const data = await fsPromises.readFile(
        filePath, 
        extension !== '.jpg' ? 'utf8' : ''
    );
    response.end(data);
};

const server = http.createServer((req, res)=> {
    console.log(req.url, req.method);
    
    const filePath = req.url === '/'? path.join(__dirname, 'views', 'index.html') : 
        req.url === '/new-page'? path.join(__dirname, 'views', 'new-page.html') :
            req.url === '/index'? path.join(__dirname, 'views', 'subdir', 'index.html') : 
                req.url === '/css/style.css' ? path.join(__dirname, req.url) :
                    req.url === '/img/img1.jpg' ? path.join(__dirname, req.url) :
                        // req.url === '/favicon.ico' ? path.join(__dirname, req.url) :
                            null;
    if(filePath === null) console.log('the path does not exists'); 
    if(filePath === null) return;
    serveFile(filePath, res, req.url);
    console.log(filePath);
});


server.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
});


