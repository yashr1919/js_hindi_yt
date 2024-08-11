let score = "33ab"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
//JS will convert the string type to number
//here it is not actual string so it comes NaN
//"33" => 33
//"33ab" => NaN
//true => 1; false=> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"yash" => true

//            Operations          //

let value =3
let negValue= -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%3);
// console.log(2/3);

let str1= "hello"
let str2= " yash"
let str3= str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");

// console.log(+true);
// console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++;
//++gameCounter;
console.log(gameCounter);
