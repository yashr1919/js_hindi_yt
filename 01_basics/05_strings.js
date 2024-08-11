const name = "yash"
const repoCount = 50
//console.log(name+repoCount "Value");
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('yashry')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const url = "https://yash.com/yash%20ray"
//space gets covered automatically with %20

//if you want something else in place of %20
console.log(url.replace('%20', '-'))

//if u want to check if url has 'any word'
console.log(url.includes('yash'))

//if u want to split
console.log(gameName.split('-'));
//splitted on the basis of dash'-'









