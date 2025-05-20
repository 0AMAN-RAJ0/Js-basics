const name = "Aman Raj " // typeof string
const age = 19

// console.log(name + age + " Value"); -> not preferable in modern daye use backticks instead

console.log(`Hello my name is ${name} and I my age is ${age}`);

// another way to declare string
const gameName = new String('aman-raj')

console.log(typeof gameName); // an object

console.log(gameName.length)
console.log(gameName[5])
console.log(gameName.__proto__) // for accessing the object prototype

// string methods
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4)) // find the character at particular index

const newString = gameName.substring(0, 4) // [0,4) -> not obey neg-values start from 0
console.log(newString);

const anotherString = gameName.slice(-6, 4) // [-6,4) -> negative values allowed
console.log(anotherString)

const newStringOne = "    amanraj    "
console.log(newStringOne.trim()); // trim down irrelevant spaces

const url = "https://amanraj.com/aman%20raj"
console.log(url.replace("aman", "max")); // replaces only 1st occurence
console.log(url.replaceAll("aman", "max")); // replaces all aman

console.log(url.includes("max"))

const string_for_split = "aman-raj-hello-world"
console.log(string_for_split.split("-")); // arguments - seperator , limit -> gives an array
