const user = {
    username : "aman",
    price : 199,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`); /// for referring to current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function hello () {
//     console.log(this); // this works in normal function -> many things it gives
// }
// function hello () {
//     let username : "aman"
//     console.log(this.username); // this works in normal function
// }

const hello = () => {
    console.log(this) // it is not giving anything -> empty
}

// hello()

// const addTwo = (num1, num2) => { // explicit return
//     return num1 + num2
// }
const addTwo = (num1, num2) => num1 + num2 // implicit return
const subTwo = (num1, num2) => (num1 - num2) // implicit return no need to write return in () brackets but in {} -> we write

console.log(addTwo(3,4));
console.log(subTwo(3,4));

const obj = () => ({username : "aman", price : 300})

console.log(obj());

const myArray = [2, 3, 4, 5, 6, 7]

myArray.forEach( (num, index) => {
    console.log(index + ":" + num);
})

