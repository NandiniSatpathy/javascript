//Primitive

//7 types : Number, String, Boolean, null, undefined, Symbol, BigInt

//no decimal scenes

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null

let userEmail // let userEmail (stores undefined) and let userEmail = undefined statements are same

const id = Symbol('123')
const newId = Symbol('123')

console.log(id === newId); //returns FALSE

const bigNumber = 24234324234234234n  //for BigInt



// there is no type mentioned here so it is dynamically typed programming language

//Reference (non primitive)

//Array, Objects, Functions

const heroes = ["ironman","aquaman","spiderman"]

let myObj = {
    name1 : "nandini",
    age : 12,

}

const myFun = function(){
 console.log("Hello World!");
}

console.log(typeof myObj); //returns object

console.log(typeof myFun); //returns function object


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

