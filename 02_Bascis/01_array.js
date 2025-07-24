// array

const myArr = [1, 2, 3, 4, 5, 6 ]

const myFriends = ["Shubhangi", "Rishu", "Rajkumar", "Mukesh"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8)

console.log(myArr[0]);



// Array Methods

// myArr.push(7)
// myArr.push(12)
// myArr.pop()

// myArr.unshift(8)       // add in start of array
// myArr.shift()         // remove in start of array


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);






