class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log('Username is :', this.username)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const teacher1 = new Teacher("aman", "example@gmail.com", "12345")
console.log(teacher1);
teacher1.addCourse()
teacher1.logMe()

const user1 = new User("hello")
user1.logMe()

console.log(user1 instanceof User) // true
console.log(teacher1 instanceof Teacher) // true
console.log(user1 instanceof Teacher) // false
console.log(teacher1 instanceof User) // true
console.log(Teacher instanceof User) // false
