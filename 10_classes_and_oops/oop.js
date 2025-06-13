// Object literal
const user = {
    username: "aman",
    loginCount: 5,
    signedIn: true,
    getUserDetails: function (){
        console.log("Got details from database");
        console.log(`Username: ${this.username}`)
    }
}
// user.getUserDetails()
// console.log(user.getUserDetails())

// Constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = () => {
        console.log(`Welcome ${this.username}`)
    }
    // return this
}
// WHEN WE ENTER A new Keyword : ->
// JavaScript automatically does four things:

// Creates a new empty object: {}

// Sets the this keyword inside the function to point to that object

// Runs the function body, attaching properties to this

// Returns this by default, unless you explicitly return a different object

const userOne = new User("Aman Raj", 19, true)
const userTwo = new User("Hitesh", 11, false)
console.log(userOne.constructor)
// console.log(userTwo)


