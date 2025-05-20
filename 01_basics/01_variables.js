const accountId = 144553
let emailId = "amanraj@gmail.com"
var password = "12345"
accountCity = "Patna"

let accountState

// accountId = 2 -> not possible
// emailId = "harshit@gmail.com " -> allowed
// password = "34567" -> allowed
// accountCity = "Banglore" -> allowed

console.log(accountId);
console.log(emailId);
console.log(password);
console.log(accountCity);

console.table([accountId, accountCity, password, emailId, accountState]);

/*
NOTE : prefer not to use var because of issue in block scope and functional scope.
*/
