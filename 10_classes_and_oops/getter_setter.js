class User{
    constructor(email, password){ 
        this.email = email
        this.password = password // here also you are setting -> it calls the setter func behind the scenes
    }

    get email(){
        return this._email.toUpperCase()   // ✅ sets private field -> if we will not use then it will trigger the set again & again -> infinite recursion
    }
    set email(value){            // ✅ reads private field
        this._email = value
    }

    get password(){
        return `${this._password}aman`
    } 
    set password(value){ // if only getter is used then for setting it there is no option so it throws error
        this._password = value
    }
}
// this.email -> a public facing property 
// this._email -> think of a storage room 

const user1 = new User("ex@aman.ai", "1234") 
console.log(user1.password);
console.log(user1.email);
