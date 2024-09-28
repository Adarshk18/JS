let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate)
let myCreatedDate = new Date(2024,7,11)
console.log(myCreatedDate.toDateString())

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000));