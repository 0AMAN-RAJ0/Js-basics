const myNums = [1,2,3,4,5,6,7,8,9,10]
// RETURN NEW ARRAY ARRAY BY MANIPULATING THE VALUES OF THE ARRAY
// const newNums = myNums.map((num) => num * num)

// chaining
const newNums = myNums // you can do as much chaining as you want
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
                
console.log(newNums)