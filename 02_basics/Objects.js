//Costructor thru method
Object.create

//objects literals

const mySym = Symbol("key")

const JsUser = {
    name: "Adarsh",
    location: "kolkata",
    age: 18,
    mySym: "myKey1",
    isLoggedIn: false,
}

//Access the object
console.log(JsUser.age);
console.log(JsUser.location);
console.log(JsUser.mySymm);

console.log(JsUser["age"]);

console.log(JsUser.age=25);
Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("Hello from kolkata");
}

JsUser.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);
}

