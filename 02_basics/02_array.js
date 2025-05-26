let marvel_heroes = ["thor", "ironman", "spiderman"]
let dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes); // modifies the array by appending element
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const newArr = marvel_heroes.concat(dc_heroes); // returns new array by combining two arrays without modifying the existing one
console.log(newArr);

// spread operator

const newHeroes = [...marvel_heroes, ...dc_heroes] // spread all individual elements
console.log(newHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], [6, 7, [8, 9, 10]]]

const real_another_array = anotherArr.flat(2) // also can give INFINITY
console.log(real_another_array);

console.log(Array.from("aman")) // converts to array each character
console.log(Array.from({name : "aman", age : 19})); // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
