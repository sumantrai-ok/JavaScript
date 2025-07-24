// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "shubhangi",
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "raisumant99@gmail.com",
    fullname: {
        userfullfame: {
            firstname: "Sumant",
            lastname: "Rai"
        }
    }
}

// console.log(regularUser.fullname.userfullfame.firstname);

const obj1 = {
    1: "Sumant",
    2: "Shubhangi"
}

const obj2 = {
    3: "Rai",
    4: "Mishra"
}

const obj4 = {
    5: "87.20",
    6: "87.20"
}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);



const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "p@gmail.com"
    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


