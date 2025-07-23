// primitive

// 7 types:  String, Number, Boolean, null, undefined, bigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 345643234543434532454324565432134n
// console.log(typeof bigNumber)


// Reference (Non primitive)

// 4 types:  Array, Objects, Function, Map


const heros = ["shaktiman", "naagraj", "doga"]

const myObj = {
    name: "Sumant Rai",
    age: 20,
    email: "rai@gmail.com"
}

const myFunction = function(){
    console.log("Hello Welecome to JavaScript World");
    
}

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);








// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "sumantraidotcom"

let anothername = myYoutubename
anothername = "rishu rai"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "sumantrai@google.com"

console.log(userOne.email);
console.log(userTwo.email);


