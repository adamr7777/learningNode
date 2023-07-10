const {createReadStream} = require('fs');
const {appendFileSync} = require('fs');
const path = require('path');


for(let i = 1; i < 10; i++) {
    appendFileSync(path.join(__dirname, 'data.txt'), `\nthis is the variable${i}`);
};

const stream = createReadStream('./data.txt');

stream.on('open, ()=>);

