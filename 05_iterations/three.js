// for of

// ["", "", ""]

// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // for of loop element -> anyObject
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps (c++)
const map = new Map() // Map constructor
map.set("a", 1) // set key-value pairs (remembers the order of insertion) (unique values)
map.set("b", 2)
map.set("b", 3) // it will change but not repeat

console.log(map.get("a")); // get the valuefrom the key
console.log(map);

for (const [val1, val2] of map) { // extract the pairs (c++) -> return as arrays -> destructure the array
    console.log(`hello ${val1} and ${val2}`)
}

const myObj = {
    'game1' : "GTA6",
    "game2" : "PUBG"
}

// for (const [key, value] of myObj) { -> not iterable by forof loop for Objects
    
// }

// for (const key in map) { -> not work in case of map
//     console.log(`${key}`)
// }