// let myName = "Aman Raj   "
// let myChannel = "Aman Raj   "

// console.log(myName.trim().length)

let myHero = ["thor", "spiderman", "hulk"]

let heroPower = {
    thor: "Hammer",
    spiderman: "slinky",
    hulk: "strength",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.aman = function () { // as all things are object so everyone will get aman prototype
    console.log(`aman is present in all objects`);
}

Array.prototype.heyaman = () => console.log(`hey aman`);


console.log(Object.prototype);

heroPower.aman()

myHero.aman()

myHero.heyaman()

// heroPower.heyaman()

//  INHERITANCE   //
const user = {
    username : "aman__ae _pae",
    email: "aman@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user
console.log(teacher.username) // now all properties of user is now accessed by teacher

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)
console.log(teachingSupport.makeVideo);

let anotherUserName = "Aman Hi      "

String.prototype.trueLength = function () {
    console.log(this) // context of the string "Aman Hi      "
    console.log(this.name)
    console.log(`true length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
