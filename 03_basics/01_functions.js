
function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}
//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,4)

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3,5)
// console.log("result :", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just loggen in`
}
// console.log(loginUserMessage("yash"));
// console.log(loginUserMessage());

const user = {
    username: "sam",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)