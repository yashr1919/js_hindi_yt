// singleton
const mySym = Symbol("key1")
//object literals
const JsUser = {
    name : "yash",
    age : 20,
    location : "juju",
    [mySym]: "mykey1",
    isLoggedIn : false,
    lastloginDays : ["Monday", "Saturday"]
}
// console.log(JsUser.location);//one way
// console.log(JsUser["location"]);//actual way
// console.log(JsUser[mySym]);

//to change anything, for eg- location
 JsUser.location = "guju"
// //if u want no changes after declaration
 //Object.freeze(JsUser) //use this
 //console.log(JsUser[mySym]);

 JsUser.greeting = function(){
    console.log("Hello Js user");
 }
 JsUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);//to get name
 }
 
 console.log(JsUser.greeting());
 console.log(JsUser.greetingtwo());
 
 

