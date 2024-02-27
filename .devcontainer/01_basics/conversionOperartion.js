let score = 33 
console.log(typeof score) // it is number


let score1 = "33"
console.log(typeof score1) // it is string
//if we want to convert string to number
score1 = Number(score1)
console.log(typeof score1) //it is number
console.log(score1) //it is 33


let value = null
console.log(typeof score1) // it is number
let newValue = Number(value)
console.log(typeof newValue) //it is number
console.log(newValue) //it is 0


let value1 = undefined
console.log(typeof score1) // it is number
let newValue1 = Number(value1)
console.log(typeof newValue1) //it is number
console.log(newValue1)  //it is NaN


let boolVal = true
console.log(typeof score1) // it is boolean
let newBoolVal = Number(boolVal)
console.log(typeof newBoolVal) //it is number
console.log(newBoolVal)  //it is 1, FOR FALSE IT IS 0


let name1 = "NANDINI"
console.log(typeof name1) // it is string
let newName = Number(name1)
console.log(typeof newName) //it is number
console.log(newName)  //it is NaN

//"33" -> Number("33")  -> 33
//"33abc" -> Number("33abc") -> NaN
//true -> Number(true) -> 1, Number(false) -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedInNoW = 0
let booleanIsLoggedInNow = Boolean(isLoggedInNoW)
console.log(booleanIsLoggedInNow)

let loggedInPerson = "Nandini"
let booleanLoggedInPerson = Boolean(loggedInPerson)
console.log(booleanLoggedInPerson)

let notLoggedInPerson = ""
let booleanNotLoggedInPerson = Boolean(notLoggedInPerson)
console.log(booleanNotLoggedInPerson)

//1 -> true, 0 -> false
//"" -> false, "Nandini" -> true

let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(typeof stringSomeNumber) //it is string

