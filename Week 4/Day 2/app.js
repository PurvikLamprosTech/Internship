// This file contains:
// ***Reference: https://www.youtube.com/watch?v=TlB_eWDSMt4&t=357s ***
// node modules

// ***NOTES***
// //to load a module, we need require('js file path')
// -----> and also use [jshint fileName.js] in the terminal for the any error hints


//--------------------------------------------------------------------------------------------------------

// const logger1 = require('./logger')

// console.log(logger1);  //op :-> { log1: [Function: log] }  // it means we have access of this function (log) in the object(log1) and we can use this function, for eg:

// //logger1 = 1;



// // ----------- if we use [module.exports.log1 = log;], then:

// logger1.log1('Hello, node');



// // ------------ if we use [module.exports = log;], then:

// // now logger1 is no longer an object, its a function that we can use directly, for eg:
// logger1('Hello, Nodejs');



// //----------path

// const path1 = require('path');
// let pathObj = path1.parse('__filename');
// console.log(pathObj)



// //----------OS Module

// const os1 = require('os');
// let totalMemory = os1.totalmem();
// let freeMemory = os1.freemem();

// console.log("Total Memory " + totalMemory);
// console.log("Free Memory " + freeMemory);

// // below two lines will work exact same as above two lines:

// console.log(`Total Memory ${totalMemory}`);
// console.log(`Free Memory ${freeMemory}`);



// // ---------------File System

// const fs1 = require('fs');

// const files = fs1.readdirSync('./');
// console.log(files);


// const files2 = fs1.readdir('./', function(err, files){
//     if(err){
//         console.log("Error", err);
//     } else{
//         console.log("Result" , files);
//     }
// })



// // -------------Event

// // Here, 'EventEmitter' is a class, which is represented by uppercase in each letters

// const EventEmitter = require('events');
// const emitter = new EventEmitter();         // emitter is an object, which has bunch of methods


// //Register a listener
// emitter.on('messageLogged', () => {      // alias of addListener (exact same)
//     console.log("Listener called");
// })            

// //Raise an event
// emitter.emit('messageLogged');

// // NOTE: It is compulsory to register a listener before we raise an event, if we register after raise ; nothing would have happened.



// // ------------Event arguments

// const EventEmitter = require('events');
// const emitter = new EventEmitter();        

// //Register a listener
// emitter.on('messageLogged', (EventArg) => {
//     console.log("Listener called", EventArg);
// })            

// //Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'https://'});



// // -------------Extending Event Emitter (Half code is in logger.js file)


// const EventEmitter = require('events');
// // // const emitter = new EventEmitter();        // we don't longer need this, because we are going to work with the logger object of the Logger class

// const Logger = require('./logger')      //Logger is a class
// const logger = new Logger();            //logger is an object

// //Register a listener
// logger.on('messageLogged', (EventArg) => {
//     console.log("Listener called", EventArg);
// })            

// logger.log("Message")



// // -------------HTTP module

// //(i) Low Level Example:
// const http = require('http');

// const server = http.createServer();
// server.on('connection', (socket) => {
//     console.log("New Connection..");
// });

// server.listen(3000);
// console.log("Listening on port 3000...");


// //(ii) What we commonly do, we create a callback function
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }

//     if(req.url === '/api/example'){
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });


// server.listen(3000);
// console.log("Listening on port 3000...");



// // ----------URL module

const url1 = require('url');
const addr = 'http://localhost:3000/default.html?year=2023&month=february';

// Parse the address
const q = url1.parse(addr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);        // -> localhost:3000
console.log(q.pathname);    // -> /default.html
console.log(q.search);      // -> ?year=2023&month=february

/*The query property returns an object with all the querystring parameters as properties:*/
const qdata = q.query;
console.log(qdata.month);   //february
console.log(qdata.year);    //2023





