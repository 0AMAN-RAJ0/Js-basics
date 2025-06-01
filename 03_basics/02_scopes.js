let a = 100
// const b = 20
var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30 /// problem of scope it will also affect the global variable -> change 300 -> 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one () {
    const username = "Aman"

    function two () {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}

// one()

if(true) {
    const username = "aman"
    if(username === "aman"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);

// ****************** interesting *************************************************
console.log(addOne(5));

function addOne (num) {
    return num + 1
}

console.log(addTwo(5)) // cannot access addTwo but addOne can

const addTwo = function (num) {  /// expression
    return num + 2
}
