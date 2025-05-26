// objects constructor
const tinderUser = new Object() // /declaration non-singleton object (multiple instances)
// const tinderUser = {} -> singleton object (single instance)
console.log(tinderUser); 

tinderUser.id = "123abc"
tinderUser.name = "Rohan"
tinderUser.isLoggedIn = false

console.log(tinderUser); 

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Aman",
            lastname : "Raj"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {2 : "a", 4 : "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2) /// 
// const obj5 = Object.assign(obj1, obj2) /// all obj2 is merging with obj1
// console.log(obj4);
// console.log(obj5);

// console.log(obj4 === obj1); // false 
// console.log(obj5 === obj1); // true

const obj6 = {...obj1, ...obj2}
console.log(obj6);

const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    },
    {
        id : 4,
        email : "d@gmail.com"
    },
]

console.log(users[1].id);
console.log(tinderUser);

console.log(Object.keys(tinderUser)) // returns an array of all the keys of the object
console.log(Object.values(tinderUser)) // same with values
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // chech whether a property is present or not