if( 2 == "2"){ // here datatype is no checked, for strict checking ===
    console.log("executed"); //executed
}

if(true){

}else if(false){

}else{

}

switch (key) {
    case value: 'A' //FOR DUPLICATING BLOCK OF CODE, ALT+SHIFT+DOWN ARROW
        
        break;
    case value: 'A'
        
        break;
    case value: 'A'
        
        break;

    default:
        break;
}

//FALSY Value : false, 0 , -0, BigInt 0n, "", null, undefined, NaN
//TRUTHY Vaue : "0", 'false'(it is in string), " ", [], {}, function(){} - empty fucntion

let email = []

if(email.length === 0){
    console.log("email is empty");
}else{
    console.log("email is not empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log(`object is empty`);
}

//nullish coalescing operator (??) : null undefined, this is for null check, null safety

let val1;
//val1 = 5 ?? 10 //here it will store 5

//val1 = null ?? 10 //here it wil be 10

//val1 = undefined ?? 15 // here it will be 15

val1 = null ?? 10 ?? 20 // here it will store 10

//condition ? true : false

//**************loops *********************/

for(let index = 0; index < 10; index++) {
   const element = index;
   if(element == 5){
    console.log("5 is the best number");
   }
   console.log(element);
}

for(let i=1;i<=10;i++){
  console.log(`Outer Loop ${i}`);
  for(let j=1; j<=10;j++){
    console.log(`${i} * ${j} = `+ i*j);
  }
}

const myArray = ["Hi", "Hello","Vankkam"]
for(let i=0; i<myArray.length; i++){
 console.log(myArray[i]);
}