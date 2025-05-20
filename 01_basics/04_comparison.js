// console.log(2 == 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 != 1)

console.log("2" > 1) // converted to number then compared as true
console.log("02" > 1) // same as above

/*
console.log(null == 0) // false -> no conversion of null
console.log(null >= 0) // true -> conversion of null as 0
console.log(null <= 0) // true -> conversion of null as 0
console.log(null > 0) // false -> conversion of null as 0
console.log(null < 0) // false -> conversion of null as 0
*/
console.log(undefined == 0) // false 
console.log(undefined >= 0) // false
console.log(undefined <= 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// == , >= || >< work differently

// === (also compare data types)
console.log("2" == 2) // true conversion
console.log("2" === 2) // false