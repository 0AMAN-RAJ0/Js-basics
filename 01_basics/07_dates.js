//  Dates

let myDate = new Date() // we created an instance (for current date)
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)
/*
let myCreatedDate = new Date(2025, 4, 26) // create a specific date
console.log(myCreatedDate.toLocaleDateString()); // months start from -> 0

let myCreatedDate2 = new Date(2025, 4, 26, 11, 34, 45) // create a specific date
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-02-24"); // yyyy--mm-dd
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("04-02-3459"); // mm-dd-yyyy
console.log(myCreatedDate4.toLocaleString());
*/

let myTimeStamp = Date.now() // give in millisec
console.log(myTimeStamp); // for comparing two dates as it gives answers in millisec
console.log(myDate.getTime()); // myDate is an object and by get time we can get time from jan 1 1970 (ref)
console.log(typeof myTimeStamp); // number

console.log(Math.floor(myTimeStamp/1000)) // millisec in -> sec

let newDate = new Date()
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    hour: "2-digit" // individual components can't be used with formatting styles such as Datestyle / timestyle
}))