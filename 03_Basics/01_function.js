// function sayMyName() {
//     console.log("S");
//     console.log("U");
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("T");
// }

// sayMyName()


// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2 
}

const result = addTwoNumber(5, 2)

// console.log("Result: ",result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("plese enter a username");
        return
    }
    return `${username} just logged in`
}

// const message = loginUserMessage("Shubhangi")
// console.log(message);

// console.log(loginUserMessage("Shubhangi"));
console.log(loginUserMessage("sumant"));
