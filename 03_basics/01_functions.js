function sayMyName () {
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("N")
}

// sayMyName  -> this is reference
// sayMyName()  -> this is execution
function addTwoNumbers (number1, number2) { // -> parameters passing
    // console.log(number1 + number2)
    return number1 + number2
}

let result = addTwoNumbers(3, 4)
console.log(result)

function loginUserMessage (username = "sam") { // for default values
    if (username === undefined) { // !username
        console.log(`please enter a username`);
        return
    }
        return `${username} just logged in`
}

console.log(loginUserMessage("Aman"));
console.log(loginUserMessage()); // no value passed so undefined

function calculateCartPrice (val1, val2, ...num1) { // rest operator same as spread
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600, 700, 800));

const user = {
    username : "Aman",
    price : 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username : "hitesh",
    price : 900
})

const newArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(newArray))
console.log([200, 400, 100, 600]);
