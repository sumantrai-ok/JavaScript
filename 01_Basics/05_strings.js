const name = "Sumant Rai "
const repoCount = 12

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sumant-hc")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf("c"));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "        sumant    "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sumant.com/sumant%20rai"

console.log(url.replace("%20","-"));

console.log(url.includes("sumant"));


console.log(gameName.split('-'));

