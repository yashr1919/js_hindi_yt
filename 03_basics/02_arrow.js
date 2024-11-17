const user = {
    username : "yash",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
    }
}
// user.welcomeMessage()

// const addTwo = (num1, num2) => { //explicit method
//     return num1 + num2
// }
// console.log(addTwo(3,4));

const addTwo = (num1, num2) =>  (num1 + num2) //this is implicit method
console.log(addTwo(3,4));