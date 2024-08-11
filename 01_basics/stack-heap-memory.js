//stack (Primitive), Heap (non- primitive)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "yash@gmail.com"

console.log(userOne.email);
console.log(userTwo);
//as both get same value from heap so if you change something for one then it will be changed for both
