//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "adarsh"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sams@gmail.com",
    fullname: {
        userfullname: {
            firstname: "adarsh",
            lastname: "sharma",
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj = {1: "a",2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({},obj,obj2);
const obj3 = {...obj, ...obj2};
// console.log(obj3);

//when values come from database
const user = [
    {
        id: 1,
        email: "a@gmail.com"
    }
]

// user[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring
const course = {
    courseName: "js in hindi",
    price: "990",
    courseInstructor: "adarsh"
}

const {courseInstructor:instructor} = course
console.log(instructor);


//JSON in the format of objects

// {
//     "name": "adarsh",
//     "courseName": "dsa",
//     "price": "1999"
// }

// in the format of Arrays
[
    {},
    {},
    {}
]
