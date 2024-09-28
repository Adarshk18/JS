const heros = ["shaktiman","batman","spiderman"];

let myObj = {
    name: "adarsh",
    age: 22,
}

const myFunc = function(){
    console.log("Hello World");
}


// Stack (Primitive), Heap (Non-Primitive)

let myName = "Adarsh"
let anotherName = myName;

anotherName = "Adarsh1"

console.log(myName)
console.log(anotherName);

let userOne = {
    email: "adarsh.s@gmail.com",
    upi: "adarsh@paytm"

}

let userTwo = userOne;

userTwo.email = "adarsh1@gmail.com"
console.log(userOne)
console.log(userTwo)


