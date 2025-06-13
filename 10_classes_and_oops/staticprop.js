class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
    // static -> we don't want to give access
    static createId(){
        return '123'
    }
}

const user1 = new User("aman")
// console.log(user1.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// iphone.createId()  -> child also cannot access the parent

