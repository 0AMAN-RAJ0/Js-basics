// ES6
/*
class User {
    age = 18 // property / field -> without variable declaration
    x = 5
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){ /// not any variables are required
        return `${this.password}abc`
    }

    changeUserName(){
        return this.username.toUpperCase()
    }
}

const user1 = new User("aman", "aman@google.com", "12235")
console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeUserName())
console.log(user1.x)
console.log(user1.age)
*/

// BEHIND THE SCENES

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUserName = function () {
    return this.username.toUpperCase()
}

const user2 = new User("amnan", "helo@gmail.com", "12343553")
console.log(user2.encryptPassword())
console.log(user2.changeUserName())