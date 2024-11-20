function sayName(){
    // console.log("A");
    // console.log("D");
    // console.log("A");
    // console.log("R");
    // console.log("S");
    // console.log("H");
}
sayName //reference
sayName() //execute

function addTwoNumbers(number1 , number2){
    let result = number1+number2;
    return result;
}
const result = addTwoNumbers(3,6);
// console.log("Result:", result);

function userLoggedIn(username){
    if(username === undefined){
        console.log("please enter a valid username!");
        return;
    }
    return `${username} just logged in`
}

// console.log(userLoggedIn());

function calculateSum(...num1){
    return num1;
}

// console.log(calculateSum(200,300,400));

const user ={
    userName : "Adarsh",
    age: 23
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}`);
}

handleObject(user);

const myNewArray = [2,5,9];
function returnValue(getArray){
    return getArray[1]
}

console.log(returnValue(myNewArray));