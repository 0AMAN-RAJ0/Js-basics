const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()) 
console.log(balance.toFixed(2)) // for precise decimal points at that specific decimals (returns string)

const otherNumber = 128.8956
console.log(otherNumber.toPrecision(2)); // (returns string) make it round off after the digits it entered also before decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // for representing in US standard system () // in IN - 'en-IN'

console.log(Number.MAX_VALUE); // for max and min values of js can store
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER); //same for max and min int it can store
console.log(Number.MIN_SAFE_INTEGER);

//********************************************* MATHS *****************************************************************
/*
console.log(Math);
console.log(Math.abs(-3.77));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));
console.log(Math.min([3,4,5,6,6,61,1])); /// pass as individual elements otherwise NaN
const array = [3,4,5,6,6,61,1];
console.log(Math.min(...array)); // use spread operator of array
*/

console.log(Math.floor(Math.random()*6) + 1); // converted to only 1 to 6 integers by properties\

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min) // for values in 10 to 20