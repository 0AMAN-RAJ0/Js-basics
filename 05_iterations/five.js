const coding = ["js", "ruby", "cpp", "python", "java"]

coding.forEach((language) => {
    console.log(language)
})

function printMe(item) {
    console.log(item)
}


coding.forEach(printMe) // only reference is passed

coding.forEach((item, index, array) => { // 3 parameters are there in this
    console.log(item, index, array)
})

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})

const values = coding.forEach((item) => { // return undefined or not anything
    // console.log(item)
    return item
})

console.log(values) // still undefined