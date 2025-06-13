// fetch('https://something.com').then().catch().finally()

/*

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    //DB Calls , Cryptography
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise is consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username : "Aman", email : "example@gmail.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})

*/

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let error = true
        if(!error){
            resolve({username : "Aman", email : "example@gmail.com"})
        }else{
            reject("Something went wrong")
        }
        
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : "Javascript", password : "12345"})
        }else{
            reject("EROR : js went wrong")
        }
        
    }, 1000)
})

// handle with async await syntax
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR : ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((users) => {
    console.log(users)
})
.catch((error) => {
    console.log("ERROR : ", error)
})