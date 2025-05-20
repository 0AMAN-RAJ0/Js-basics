/*
let score = "33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber) // -> this will still give Number but behind the scnes it is (NaN)
console.log(valueInNumber) // -> NaN (Not a Number)

let score2 = null

let valueInNumber2 = Number(score2)

console.log(typeof valueInNumber2)
console.log(valueInNumber2) // -> 0

let score3 = undefined

let valueInNumber3 = Number(score3)

console.log(typeof valueInNumber3)
console.log(valueInNumber3) // -> NaN

let score4 = true

let valueInNumber4 = Number(score4)

console.log(typeof valueInNumber4)
console.log(valueInNumber4) // -> 1 / false = 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 -> true / 0 -> false
// "" -> false / "aman" -> true

console.log(Number("")) // -> converts to 0

let someNumber = 34
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

*/

// -------------------------------OPERATIONS------------------------------//

// console.log(2**3); // -> acts as power

let str1 = "hello"
let str2 = " aman"
let str3 = str1 + str2
console.log(str3) // simple concatenation of strings

console.log(1 + "2" + 3) // -> 123 (treat as strings)
console.log("2" + 1) // -> 21

console.log(1 - "2") // -> -1 (treat as numbers)

console.log(1 + 2 + "3") // -> 33 (first numbers then string left-right)

console.log(+true) // boolean convert in number because of increment -> 1
console.log(+"") // -> 0

let num1, num2, num3 
num1 = num2 = num3 = 2+2 // allowed

// NOTE : ++ / -- -> increment operator work same as C++