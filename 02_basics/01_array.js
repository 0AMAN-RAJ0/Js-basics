// array
const myArr = [0, 1, 2, 3, 4];

let myArr2 = myArr
myArr[0] = 9
console.log(myArr2); // it will change on both because they make shallow copies (same references) not deep copies (not same ref)
console.log(myArr.concat(myArr2));
console.log(myArr);

// another way of declare
const myArr3 = new Array(1,2,3,4,4) // automatically adds [ ] brackets
console.log(myArr3);

// ARRAY METHODS

myArr.push(34)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(900) // add to start by shifting all not optimize
console.log(myArr);
myArr.shift() // removes first elem
console.log(myArr)

// questionnare types
console.log(myArr.includes(0)) // bool
console.log(myArr.indexOf(3)) // number
let newArr = myArr.join()
console.log(newArr) // join all elements comma seperated as string

// SLICE OR SPLICE
console.log("A " , myArr);

const myn1 = myArr.slice(2, 3) // Returns a copy of a section of an array [0, 3)
console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(2, 3) // start index then how much element to be removed also changes original
console.log(myn2);
console.log("C " , myArr);
