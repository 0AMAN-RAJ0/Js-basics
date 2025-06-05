const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`acc : ${accumulator} , currVal : ${currentValue}`)
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "app dev course",
        price : 5999
    },
    {
        itemName : "data sci course",
        price : 12999
    },
]

const totalBill = shoppingCart.reduce((acc, item) => acc + item.price ,0)

console.log(totalBill)
