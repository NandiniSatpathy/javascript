// const myArr = [1,4,6,7,8,2,3,true,'Nandini',[3,6,7]] //can keep heterogeneous

// console.log(myArr);
// console.log(myArr[0]);

// //shallow copy is a copy that shares same reference
// //deep copy is a copy that does not share same reference

// const newArr = new Array(1,3,5,6,8)

// //Array methods

// myArr.push(4);
// console.log(myArr); //[ 1, 4, 6, 7, 8, 2, 3, true, 'Nandini', [ 3, 6, 7 ], 4 ]
// myArr.pop() //[ 1, 4, 6, 7, 8, 2, 3, true, 'Nandini', [ 3, 6, 7 ] ]
// console.log(myArr);

// myArr.unshift(9)  //[ 9, 1, 4, 6, 7, 8, 2, 3, true, 'Nandini', [ 3, 6, 7 ] ]
// console.log(myArr);

// myArr.shift() 
// console.log(myArr);

// console.log(myArr.includes(2)); //boolean
// console.log(myArr.indexOf(2));

// const newArr1 = myArr.join()
// console.log(newArr1);
// console.log(typeof newArr1); //String

// console.log(`original array is ${myArr}`); //original array is 1,4,6,7,8,2,3,true,Nandini,3,6,7
// const myn1 = myArr.slice(1,3)
// console.log(myn1); //4,6
// console.log(`After slicing `+myArr); //After slicing 1,4,6,7,8,2,3,true,Nandini,3,6,7
// //doesnt affect the original array 

// const myn2 = myArr.splice(1,3)
// console.log(myn2); //4,6,7  
// console.log(`After splicing `+myArr); // After splicing 1,8,2,3,true,Nandini,3,6,7
// //splicing modifies the array permanently

// const marvelHeroes = ["THOR", "IRONMAN", "SPIDERMAN"]
// const dcHeroes = ["superman","flash","batman"]
// // marvelHeroes.push(dcHeroes) //[ 'THOR', 'IRONMAN', 'SPIDERMAN', [ 'superman', 'flash', 'batman' ] ]
// // console.log(marvelHeroes);
// // console.log(marvelHeroes[3][1]); //flash

// let allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes); //[ 'THOR', 'IRONMAN', 'SPIDERMAN', 'superman', 'flash', 'batman' ]

// let allHeroesArray = [...marvelHeroes,...dcHeroes] //spread operator
// console.log(allHeroesArray); //[ 'THOR', 'IRONMAN', 'SPIDERMAN', 'superman', 'flash', 'batman' ]

// const another_array = [1,2,3,4,[5,6,7],8,[4,3,[2,5,6]]]

// const realAnotherArray = another_array.flat(Infinity) // we pass depth
// console.log(realAnotherArray);

// console.log(Array.isArray("nand"));  // false
// console.log(Array.isArray([12,34,5])); //true
// console.log(Array.from("Nandi erwe")); // gives me an array N,a,n,d,i, ,e,r,w,e

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3)); //make an array

// //############# high order array #############
// //["","",""]
// //[{},{},{}]

// const arr = [23,34,45]

// for (const num of arr){
//   console.log(num);
// }

// const greetings = "Hello World!" 
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }


// //Maps - kv pair, insertion order of keys is maintained, no dups

// const map = new Map();
// map.set('IN','india')
// map.set('AUS', 'asutraila')
// map.set('US','america')


// for(const [key,value] of map.keys){ // for of, map is not iteratable so we use for of, for in wont work
//     console.log(key, ':-', value);
// }

// let myObject = {
//    'game1' : 'NFS',
//    'game2' :'Ludo',
//    'game3' : 'kabbadi',
//    'game4' : 'kho kho'
// }
//  //for(const [key,value] of myObject){ this will no work for object
//     //console.log(key, ':-', value);
// //}

// for(const key in myObject){ // for in
//     console.log(`Game key - ${key} is for ${myObject[key]}`);
// }

// const proLan = ["java","python","swift","scala"]

// for(const key in proLan){
//     console.log(key); //here we will get all indexes, this is the key for an array
//     console.log(proLan(key));
// }

// const proLan1 = ["java","python","swift","scala","kotlin"]

// proLan1.forEach( function (value) {
//   console.log(value);
// })

// //**********another way***************/

// proLan1.forEach( (item) => {
//   console.log(item);
// })

// //**********another way*************/
// function printMe(item) {
//     console.log(item);
// }

// proLan1.forEach(printMe) // we are not executing printMe, we are giving just reference 

// proLan1.forEach((item, index, arr) => {
//    console.log(item, index, arr);
// })

// const myCoding = [
//     {
//         language : "javascript",
//         languageFileName : "js"
//     },
//     {
//         language : "java",
//         languageFileName : "java"
//     },
//     {
//         language : "python",
//         languageFileName : "py"
//     },
//     {
//         language : "kotlin",
//         languageFileName : "kot"
//     }
// ]

// myCoding.forEach( (item) => {  // for each doesnot return anything
//   console.log(item.language);
//   console.log(item.languageFileName);
// })

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 6) 
// console.log(newNums);

// const myNums1 = [1,2,3,4,5,6,7,8,9,10]
// const newNums1 = myNums1.filter((num) => {
//     return num > 6
// }) 
// console.log(newNums);

// const myNums2 = [1,2,3,4,5,6,7,8,9,10]
// const newNums2 = []

// myNums2.forEach((num) =>{   
//   if(num>4){
//   newNums.push(4)
//   }
// })

// console.log(newNums2);

const books = [
    {
        name : "one",
        genre : "history",
        publish : 2019,
        edition : 2020
    },
    {
        name : "two",
        genre : "fiction",
        publish : 2000,
        edition : 2020
    },
    {
        name : "three",
        genre : "non fiction",
        publish : 2001,
        edition : 2021
    },
    {
        name : "four",
        genre : "geology",
        publish : 2003,
        edition : 2019
    },
    {
        name : "five",
        genre : "history",
        publish : 2004,
        edition : 2010
    }
]

let myHistoryBooks = books.filter((bk) => bk.genre == "history")
console.log(myHistoryBooks);

let myOldPublishBooks = books.filter((bk) => {
   return bk.publish >= 2000 && bk.genre =="fiction"
})
console.log(myOldPublishBooks);


const myNumbers = [1,3,5,7,8,9]

const newNums = myNumbers.map((num) => num+10)

console.log(newNums);

//chaining method - 

//const newNums1 = myNumbers.map().map().filter() 

const newNums1 = myNumbers  //each element will go through map1 map2 and filter
                 .map((num) => num * 10)
                 .map((num) => num + 1)
                 .filter((num) => num > 70)

console.log(newNums1);

//*************reduce***************/
const myN = [1,2,3]

const myTotal = myN.reduce(function (acc, curVal) {
    console.log(`Accumuator ${acc} and Current Value ${curVal}`);
    return acc+curVal
}, 0)

const myTotal1 = myN.reduce((acc,curVal) => acc+curVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "abc",
        price: 500
    },
    {
        itemName: "def",
        price: 400
    },
    {
        itemName: "ghi",
        price: 300
    },
    {
        itemName: "ijk",
        price: 900
    },
    {
        itemName: "lmn",
        price: 600
    }
]

const totalPayment = shoppingCart.reduce((acc, item) => acc+item.price, 0)

console.log(totalPayment);