// palindrome using stack (in array) 

let letters = [];
let word = 'racecar';
let revWord = '';

for(let i=0; i<word.length; i++){
    letters.push(word[i]);
}

for(let i=0; i<word.length; i++){
    revWord = revWord + letters.pop();
}

if(revWord === word){
    console.log(`${word} is palindrome.`);
}else{
    console.log(`${word} is not palindrome.`);
}

//------------------------------------------------------------------------------------------------

//creates a stack
let Stack = function() {
    this.count = 0;
    this.storage = {};

    //Adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count - 1];
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(4);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push("Hello");
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());


// // ------------------------------------------------------------------------------------------------------------------

// //creates a stack --> another way (extra)
// class Stack{
//     count = 0;
//     storage = {};

//     //Adds a value onto the end of the stack
//     push = (value) => {
//         this.storage[this.count] = value;
//         this.count++;
//     }

//     // Removes and returns the value at the end of the stack
//     pop = () => {
//         if(this.count === 0){
//             return undefined;
//         }

//         this.count--;
//         let result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     size = () => {
//         return this.count;
//     }

//     // Returns the value at the end of the stack
//     peek = () => {
//         return this.storage[this.count - 1];
//     }
// }

// let myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// myStack.push(4);
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log(myStack.pop());
// myStack.push("Hello");
// console.log(myStack.peek());
// console.log(myStack.size());
// console.log(myStack.pop());
// console.log(myStack.peek());
