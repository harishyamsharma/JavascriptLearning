const accountId = 1456
let accountEmail ="sharmahari4157@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur" // do not use the variable without let & var
let accountState;

// accountId = 2 // Not Allowed

accountEmail = "hari@gmail.com"
accountPassword ="54321"
accountCity = "Mathura"
 
console.log(accountId);

/*
Prefer not use to var
because of issue in the block scope & functional scope 
*/

console.log([accountEmail, accountId, accountPassword, accountCity, accountState])   
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])  


