var c = 300 // Global scope

//local scope
if(true){
    let a = 20
const b = 10
var c = 40
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "adarsh"

    function two(){
        const website = "youtube";
        // console.log(username);
    }

    // console.log(website);
    two()
}

one()

function addOne(num){
    return num+1;
}

addTwo(5)

const addTwo =function(num){
    return num+2;
}


