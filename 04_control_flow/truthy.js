const userEmail = "aman@raj.ai" // already true
const userEmail2 = "" // already false
const userEmail3 = {} // already true
const userEmail4 = [] // already true

if(userEmail3) {
    console.log("Got user Email");
}else {
    console.log("Don't have user Email");
}

// falsy values
// false , 0, null, undefined, -0, BigInt 0n, "", NaN

// truthy values
// "0", "anyText", "false", " ", [], {}, function (){}

// if (userEmail4.length === 0) {
//     console.log("yes array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

/// Nullish Coalescing Operator (??): null undefined
// DEFN -> The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// let val1;
// val1 = null ?? 10
// console.log(val1);
// val1 = 100 ?? "hello"
// console.log(val1);
// val1 = "hello" ?? null
// console.log(val1);
// val1 = null ?? null ?? 20
// console.log(val1);
// val1 = null ?? null
// console.log(val1);

// Terniary Operator //
// if/else -> small type

// condition ? true : false

const price = 100
price >= 80 ? console.log("more than 80") : console.log("less than 80") // condition without brackets