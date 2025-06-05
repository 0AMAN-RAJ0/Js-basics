const myObj = {
    js : "Javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

// forin -> objects
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}