const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr = myNums.filter((num) => { // returns the elements of array which meets the condition in call back
    return num > 4
})

const newNums = []

myNums.forEach((num) => {
    if (num > 5) {
        newNums.push(num)
    }
})

console.log(newArr)
console.log(newNums)

const books = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationYear: 1954
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publicationYear: 1813
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publicationYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: 1960
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science",
    publicationYear: 1979
  }
]

let userBooks = books.filter((book) => book.genre === "Fiction")
userBooks = books.filter((book) => {
  return  book.publicationYear >= 1954 && book.genre === "Science"
})

console.log(userBooks)
