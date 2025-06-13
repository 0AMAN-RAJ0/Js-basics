function setUserName (username) {
    // complex DB calls
    this.username = username
}

function createUser (username, email, password) {
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const user1 = new createUser("aman", "hello@fb.com", "12345")
console.log(user1)
