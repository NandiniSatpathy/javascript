// singleton 
const myKey1 = Symbol("key1")
const myKey2 = Symbol("key2")

const myObj = {
    firstName: "Nandini",
    age:20,
    location:"Bangalore",
    email:"nan@gmail.com",
    isLoggedIn: true,
    loggedInDays:['Monday','Friday'],
    myKey1: "thisKey" ,//this will NOT LINK symbol in line 2 to object
    [myKey2]: "thisIsLinkedKey" // this WILL LINK symbol in line 2 to object, this is correct
}

console.log(myObj.email);
console.log(myObj["email"]);   //recommended
console.log(myObj[myKey1]); //undefined
console.log(myObj[myKey2]); //string

//how to stop any modification to the object 
Object.freeze(myObj)
myObj.email = "nand@yahoo.com" //this will not throw any error but it will not override actual value

console.log(myObj);

const newObj = {
    name1 : "Ravi",
    age : 23,
    email:"rav@yahoo.com"
}

newObj.greeting = function(){
    console.log("Hello JS user");
}

console.log(newObj.greeting); //[Function (anonymous)]
console.log(newObj.greeting());

newObj.greetingTwo = function(){
    console.log(`Hi the user is ${this.name1}`); //here this.name1 will work, 'this' refers to current object
}

console.log(newObj.greetingTwo());

//################# OBJECTS 2 ######################

const app = new Object() // singleton object

const app1 = {} //non singleton object
app1.id = 123
app1.name = "Nandini"
app1.isLoggedIn = false

const user = {
    email: "nand@gmail.com",
    fullName: {
        username : {
           firstname: "Nandini",
           lastname: "Satpathy"
        }
    }
}
console.log(user.fullName); // { username: { firstname: 'Nandini', lastname: 'Satpathy' } }
console.log(user.fullName.username.firstname ? user.fullName.username.firstname : user.fullName.username.lastname) //Nandini


const myObj1 = {1:'A', 2:'B'}
const myObj2 = {3:'C', 4:'D'}

const myObj3 = { myObj1, myObj2 } 
console.log(myObj3); //{ myObj1: { '1': 'A', '2': 'B' }, myObj2: { '3': 'C', '4': 'D' } }

const myObj4 = Object.assign(myObj1,myObj2)
console.log(myObj4); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

//BEST WAY TO DO THIS IS :
const myObj5 = Object.assign({}, myObj1, myObj2) // this gurantees that the resultant/target will be an object {}, myObj1, myObj2 are sources

//industry standards - 
const myObj6 = {...myObj1, ...myObj2} //use spread operator
console.log(myObj6);

//array of objects
const users = [
    {
        id:1,
        email: "one@gmail.com"
    },
    {
        id:2,
        email: "two@gmail.com"
    },
    {
        id:3,
        email: "three@gmail.com"
    }
]

console.log(users[1].email);


//to get the keys of an object

console.log(Object.keys(app1)); //[ 'id', 'name', 'isLoggedIn' ]   //array
console.log(Object.values(app1)); //[ 123, 'Nandini', false ]   //array
console.log(Object.entries(app1)); //[ [ 'id', 123 ], [ 'name', 'Nandini' ], [ 'isLoggedIn', false ] ] //array of arrays


console.log(app1.hasOwnProperty('isLoggedIn')) //true
console.log(app1.hasOwnProperty('isLog')) //false


//####################################### OBJECTS 3 ###########################################
//DE STRUCTURING can happen to both object and array

const course = {
    courseName : "Javascript",
    price : 999,
    courseInstructor : "Nandini"
}

//course.courseInstructor
//this is another way of writing, it keeps the code neat and clean
const {courseInstructor} = course
console.log(courseInstructor); //we dont need to refer to course.courseInstructor, we can simply use courseInstructor

//to change the name of the variable courseInstructor, we can do the following
const {courseInstructor : instructor} = course // this type of 
console.log(instructor); //it will be the same result 


// json
// {
//     "name" :"nandini",
//     "age":"12",
//     "course": "js"

// }

