const name = "Adarsh";
const repoCount = 60;

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("adarshsh");
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

// we can give negative values in slice but not in substring


const newString = gameName.slice(0,-1)
console.log(newString)

const anotherString = gameName.substring(0,5)
console.log(anotherString)


//trim - removes extra spaces from the string
const str = "    adarsh   "
console.log(str);
console.log(str.trim());

//replace
const url = "https://www.goo%20le.com"
console.log(url.replace('%20', 'g'));


console.log(url.split('-'))