const myNums = [1,2,3,4,5];

// const initialValues = 0;
const newNums = myNums.reduce(function (accumulator, currentValue) { 
    console.log(`accu: ${accumulator} and curr: ${currentValue}`);
    return accumulator + currentValue},0);

console.log(newNums);