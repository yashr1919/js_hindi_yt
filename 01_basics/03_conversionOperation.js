let score = "33ab"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//JS will convert the string type to number
//here it is not actual string so it comes NaN
//"33" => 33
//"33ab" => NaN
//true => 1; false=> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"yash" => true

