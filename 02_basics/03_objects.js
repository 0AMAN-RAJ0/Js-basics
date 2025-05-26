//objects
// singleton -> only in constructor not in literals
// objects.create

// objects literals

const mySym = Symbol("key1")

const expression = " hello"
const i = 10

const jsUser = {
    name : "aman", // keys or values
    "fullname" : "Aman Raj",
    age : 19,
    location : "patna",
    email : "amanraj@gmail.com", // all keys are tracked as strings
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Saturday"],
    [mySym] : mySym, // use variable as keys or make it as dynamic expression
    [i + expression] : "-> HI"
}

console.log(jsUser.email);
console.log(jsUser["email"]); // we will give email as string
console.log(jsUser.fullname)
console.log(jsUser["fullname"]) // can also be accessed by this way
console.log(typeof jsUser[mySym]); // it will give string because the typof of value is string
console.log(typeof jsUser.age);
console.log(typeof jsUser[mySym]); // use variable as keys
console.log(jsUser[mySym]);
console.log(jsUser[i+expression]); // -> whole variable as keys even symbols returns -> HI
console.log(jsUser);

jsUser.email = "amanraj@google.com"
// Object.freeze(jsUser) // freeze the object so that no changes occur further
jsUser.email = "amanraj@microsoft.com"
console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js User");
}
jsUser.greetingTwo = function() { 
    console.log(`Hello js User, ${this.name} and my age is ${this.age}`); // referencing same object // also jsUser
}
console.log(jsUser.greeting) // only refers to the func not calling it
jsUser.greeting() // simply access the func
console.log(jsUser.greeting()) //  This calls the function again, which again prints "Hello js User" (from inside the function), but the function itself doesn't return anything — so it returns undefined.
jsUser.greetingTwo()
