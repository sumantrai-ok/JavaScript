// singleton
// Object.create


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "sumant",
    "full name": "Sumant Rai",
    [mySym]:"mykey1",
    age: 20,
    location: "Mumbai",
    email: "rai@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondey", "Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "sumant@chatgpt.com"

// Object.freeze(jsUser)

jsUser.email = "sumant@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js User"); 
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
