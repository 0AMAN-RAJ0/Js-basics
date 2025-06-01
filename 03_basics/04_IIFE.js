// Immediately Invoked Function Expressions (IIFE)

(function mongoConnect () {
    // named IIFE
    console.log(`DB Connected !`);
})();

// IIFE func for saving it from global scope pollution
// ()() -> first () func definition and second one () execution
// add semicolon to end

( (name) => {
    // unnamed IIFE
    console.log(`DB connected 2 ! ${name}`)
})("aman");