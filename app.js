const {readFile} = require('fs');


console.log('start the code');

readFile('./directory/subDirectory/text1.txt', 'utf8', (err, res)=> {
    if(err) return
    console.log(res);
});


// readFile('./directory/subDirectory/text2.txt', 'utf8', (err, res)=> {
//     if(err) return
//     console.log(res);
// });


console.log('finish the deal');