// This file contains:
// ***Reference: https://www.youtube.com/watch?v=TlB_eWDSMt4&t=357s ***
// node modules


// let url = "https://www.youtube.com/";

// function log (message){
//     //Send an HTTP request
//     console.log(message);
// }

// module.exports.log1 = log;  // by this, we have created an object(log1) and assigned a function into it. and also we make this module public so that it can be access outside (or in another module we can say).



// module.exports = log; // we can do something like this, if we don't have multiple methods 

// console.log(__filename);
// console.log(__dirname);



// now we will use this module(logger.js) inside the app.js module



// // --------------Extending Event Emitter (Half code is in app.js file)

// const EventEmitter = require('events');
// // // const emitter = new EventEmitter();       // we don't need this because we haven't use it in anywhere

// let url = "https://www.youtube.com/";

// class Logger extends EventEmitter{          // now, Logger class has all the functionalities that an EventEmitter has.
//     log (message){              // when we define a function in a class, we don't need that function keyword.
//         //Send an HTTP request
//         console.log(message);
    
    
//         //Raise an event
//         this.emit('messageLogged', {id: 1, url: 'https://'});       // Here, 'this' keyword is reference to the logger class itself
//     }
// }

// module.exports = Logger;



