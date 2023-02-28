function queue(){
    collection =[];
    this.print = function(){
        console.log(collection);
    };
    this.enqueue = function(element){
        collection.push(element);
    };
    this.dequeue = function(){
        return collection.shift();
    };
    this.front = function(){
        return collection[0];
    };
    this.size = function(){
        return collection.length;
    };
    this.isEmpty = function(){
        return (collection.length === 0);
    };
}

let q = new queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.print();
console.log(q.front());
console.log(q.isEmpty());
q.dequeue();
q.print();
q.dequeue();
console.log(q.isEmpty());



// // ------------------------ Priority Queue

function PriorityQueue () {
    let collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){ // If the queue is empty, add the element to the end of the array
            collection.push(element);
        } else { // Otherwise, loop through the array to find the appropriate position for the new element
            let added = false; // Boolean variable to keep track of whether the element has been added
            for (let i=0; i<collection.length; i++){
                if (element[1] < collection[i][1]){ // Compare the priority of the new element to the priority of each element in the array
                    collection.splice(i,0,element); // If the new element has a higher priority than an element in the array, insert it at that position
                    added = true; // Set the added variable to true
                    break; // Exit the loop once the element has been added
                }
            }
            if (!added){ // If the element has not been added yet, it has the lowest priority and should be added to the end of the array
                collection.push(element);
            }
        }
    };    
    this.dequeue = function() {
        let value = collection.shift(); // Remove and store the first element (the element with the highest priority) from the array
        return value[0]; // Return the actual element of the removed element (not its priority value)
    };    
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
// pq.dequeue();
// console.log(pq.front());
// pq.printCollection();