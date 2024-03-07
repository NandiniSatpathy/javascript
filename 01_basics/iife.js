//Immediately invoked function expressions (IIFE)

function chai(){
    console.log(`DB CONNECTED!`);
}

chai()

//there are times when there is pollution due to global scope so to make it clear we will use iife. It helps in immediate execution

(function chai1(){   //named iife
    console.log(`db connected`);
})(); // this is how we mark it as iife, ()()  1st() is function definition, 2nd () is execution

//using arrow functions
(() => {  //unnamed iife
    console.log(`db connected`);
})();  //if no ; in line no. 13 then this we will give error

//one more example
((name) => {  //unnamed iife passing parameters
    console.log(`Hi ${name}`);
})("nandu")



