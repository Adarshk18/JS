// const coding = ["ruby","js","python","java","cpp"];

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item;

//     //since this for each doesnt return anything.
// } )

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

//filter also takes callback

// console.log(myNums.filter( (num) => num>4 ));

// console.log(myNums.filter( (num) => {return num>5} ));

// const newNums = [];

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// } )

// console.log(newNums);

const books = [
    {title: 'Book one', genre: 'fiction', publish: 2007, edition: 2015},
    {title: 'Book two', genre: 'science', publish: 2001, edition: 2007},
    {title: 'Book three', genre: 'History', publish: 2009, edition: 2018},
    {title: 'Book four', genre: 'fiction', publish: 2000, edition: 2013},
    {title: 'Book five', genre: 'History', publish: 2014, edition: 2024},
];

let userBooks = books.filter( (bk) => bk.genre=='History');
userBooks = books.filter( (bk) => {
    return bk.publish>=2006 && bk.genre==='fiction'
} );
console.log(userBooks);
