function sayMyName(){
    console.log("Hello");
}

sayMyName //this is the reference, mem location

sayMyName() //this is execution

function addTwoNum(num1, num2){  //no need to give type, these are parameters
 console.log(num1+num2);
}

addTwoNum(4,6) //10 these are called as arguments
addTwoNum(4,"6") //46
addTwoNum(4,null)

const result = addTwoNum(3,7)
console.log(result); //we will get as undefined

function add2Num(number1, number2){
//    let result = number1 + number2
//    return result
  return number1+number2
}

console.log(add2Num(4,6));

function userLogInMsg(username){
    if(!username){ //${username === undefined}
        console.log("Please enter a valid username");
        return //line no. 33 will not be executed
    }
  return `Hi ${username} just logged in`
}

console.log(userLogInMsg("Nandini"))


function userLogInMsg2Time(username = "Putli"){
     return `Hi ${username} just logged in`
}

console.log(userLogInMsg2Time("Nandini")); // here Nandini will override Putli

//#############Function 2################################3

function calculateCartPrice(...num1){ //... rest operator and spread operator. Now it is rest operator it means whatever value we are getting wrap all in one bundle 
  return num1  // we get Array here - [200, 400, 500]
}

console.log(calculateCartPrice(200,400,500));

function calculateCartPriceNew(val1, val2, ...num1){ //... rest operator and spread operator. Now it is rest operator it means whatever value we are getting wrap all in one bundle 
    return num1  // we get Array here - [500, 1000] because val1 has taken vaue as 200, val2 has taken value as 400 and num1 is now having array [500, 1000]
  }
  
  console.log(calculateCartPrice(200,400,500,1000));

  const user = {
    username : "Nandini",
    age: 89
  }

  function handleObject(anyobject){
    console.log(`User ${anyobject.username} is of age ${anyobject.age}`);
  }

  handleObject(user)


  //another way of passing objects directly

  handleObject({
    username : "Nandini",
    age:67
  })


const myNewArray = [23,45,56]

function returnSecondValue(getArray){
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); //45

console.log(returnSecondValue([100,200,300])); //200