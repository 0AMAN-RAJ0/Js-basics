// console.log(Math.PI);
// Math.PI = 5 /// -> cannot overwrite
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

const chai = {
    name: "lemon chai",
    price: 250,
    isAvailable: true,

    orderChai: function (){
        console.log("chai nhi bni")
    }
}

const descriptor2 = Object.getOwnPropertyDescriptor(chai, "name")
console.log(descriptor2)

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})
const descriptor3 = Object.getOwnPropertyDescriptor(chai, "name")
console.log(descriptor3)

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { // name doesn't print bacause enumerable : false
        console.log(`${key} : ${value}`)
    }
}