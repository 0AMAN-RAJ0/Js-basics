// PRIMITIVE (CALL BY VALUE TYPE)

// 7-types => STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BigInt

// JS - DYNAMIC TYPE LANGUAGE
const score = 100 // not declared any datatype linke int, float
const num = 100; const num2 = 100.76; // both are numbers

const id = Symbol("123") // shows uniqueness
const id2 = Symbol("123")

console.log(id === id2) // not same

const bigNumber = 264748837636625632653736n // last n to store in it bigint


// NON-PRIMITIVE (REFERENCE TYPE)

// ARRAY , OBJECTS , FUNCTIONS

const array = ["234", 34, 567, "hello"];

let myObj = {
    name : "aman",
    age : 19
}

console.log(array)
console.log(myObj)

const myFunction = function(){
    console.log("Hello World");
}

myFunction() // call the func

console.log(typeof bigNumber); // bigint
console.log(typeof array); // obj
console.log(typeof myObj); // obj
console.log(typeof myFunction); // function

// null -> typeof -> *** object ***

//************************************* MEMORY ALLOCATION IN JS ******************************//

// STACK (primitive) , HEAP (Non-primitive)
 
let channel1 = "killergaming"

let channel2 = channel1

channel2 = "webDevelopment"

console.log(channel1) // original content does not get affected
console.log(channel2) // only copy passed of original

// heap

let user1 = {
    email : "user1@gmail.com",
    upi : "user1@ybl"
}
 
let user2 = user1

user2.email = "user2@gmail.com"
user2.upi = "user2@ybl"

console.log(user1) // due to heap both get reference of the original one not copy
console.log(user2)