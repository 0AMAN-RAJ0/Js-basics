// if
const isUserLoggedIn = true
if(isUserLoggedIn){ // then go inside
    console.log("executed");
}

if (2 == "2") { // it will check and if other data types then it will convert it into same data type
    console.log("executed");
}

if (2 === "2") { // it will check even data type
    console.log("executed");
}

if (2 != "2") { // again conversion and made it equal
    console.log("executed")
}

if (2 !== "2") { // no conversion also check data type
    console.log("executed")
}

// implicit if/else
const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2"); -> not good -> multiples codes in same line

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow Shopping");
}