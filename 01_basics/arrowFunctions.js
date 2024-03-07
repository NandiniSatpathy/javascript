//arrow function introduced in 2015
const user = {
    username : "Nandini",
    price : 99,

    welcomeMsg : function(){
        console.log(`${this.username} welcome to website`); //only ${username} can also work but it is good to use this, it refers to current context
        console.log(this); // here it will print the entire object
        // username : "Nandini",
        // price : 99,
        // welcomeMsg : [Function : welcomeMsg]
        }

}

user.welcomeMsg() //Nandini welcome to website

user.username = "Putz"

user.welcomeMsg() //Putz welcome to website

console.log(this); // gives empty {} this is in node environment, give the same in console in browser you will see Windows

function chai(){
    let username = "nandini"
    console.log(this); //gives a lot of information
    console.log(this.username); //undefined, this cannot be used in function perspective. It shoud be used in objects
}

chai()

const newChai = function(){
    let username = "putli"
    console.log(this.username) //wont work again becuase it is again scope of function
}

//for arrow functions
const newChaiUpdate = () => {
    let username = "putli"
    //console.log(this.username)  // undefined
    console.log(this) //we will get as  {}
}


//basic arrow functions   () => {}

const addTwo1 = (num1, num2) =>  num1+num2 //it will work as expected, here return stmt is not required, if it is wrapped in parantheses then return is required = explicit return type, if no paratheses then no return type = implicit return type 
const addTwo2 = (num1, num2) =>  {
    return num1+num2
}

//if we want to return object
const addTwo3 = (num1, num2) => {usernamename:"NANDINI"} // THIS WILL NOT GIVE OBJECT, WE NEED TO WRAP  THE OBJECT IN ()

const addTwo4 = (num1, num2) => ({username:"NANDINI"})
addTwo4(3,6)