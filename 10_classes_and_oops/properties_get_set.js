// old way -> without getter setter

// this.email -> a public facing property 
// this._email -> think of a storage room 

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

    // this.email = email
    // this.password = password
}

const user1 = new User("a@aman.ai", "11234")
console.log(user1.email)