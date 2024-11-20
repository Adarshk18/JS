(function DB(){
    //named IIFE
    console.log('DB Connected');
})();

( () =>{
    console.log('DB CONNECTED AGAIN');
})();

( (name) =>{
    console.log(`DB CONNECTED AGAIN ${name}`);
})('adarsh');

// DB()