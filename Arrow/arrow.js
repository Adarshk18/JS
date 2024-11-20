const user = {
    username: "adarsh",
    price: 1499,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

const addTwo = (num1,num2) => num1+num2

console.log(addTwo(3,6));