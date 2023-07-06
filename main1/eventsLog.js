const {format} = require('date-fns');
const {v4: uuid} = require('uuid');
const fsPromises = require('fs').promises;
const {join} = require('path');


const logEvents = async (message)=> {
    const time = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    const logItem = `${time}\t${uuid()}\t${message}\n`;
    try {
        await fsPromises.appendFile(join(__dirname, 'log', 'log.txt'), logItem);
    }
    catch(err) {
        console.log(err)
    };
};

module.exports = logEvents;