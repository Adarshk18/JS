const promiseOne = new Promise(function(resolve,reject){
    //Async tasks
    //DB calls, cryptography,netwrk calls
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },1000);
});

//since promise has been created now we have to consume that
promiseOne.then(function(){ // here .then has directly connection to the resolve.
    console.log('Promise Consumed');
}) 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task2 completed');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Adarsh", email: "adarsh@gmail.com"})
    },1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "adarsh", password: "1223"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
}).then((userName)=>{
    console.log(userName)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "JS", password: "1223"})
        }else{
            reject('ERROR: Js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
   
}

consumePromiseFive(
    
)

async function getAllUsers(){
    try{
        const response  = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.log(error);
    }
    
}

getAllUsers()