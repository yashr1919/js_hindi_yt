const accountId = 144553
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Rourkela"


//accountId = 2//not allowed
accountEmail = "hc@gmail.com"
accountPassword = "32123"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])