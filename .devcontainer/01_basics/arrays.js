const myArr = [1,4,6,7,8,2,3,true,'Nandini',[3,6,7]] //can keep heterogeneous

console.log(myArr);
console.log(myArr[0]);

//shallow copy is a copy that shares same reference
//deep copy is a copy that does not share same reference

const newArr = new Array(1,3,5,6,8)

//Array methods

myArr.push(4);
console.log(myArr); //[ 1, 4, 6, 7, 8, 2, 3, true, 'Nandini', [ 3, 6, 7 ], 4 ]
myArr.pop() //[ 1, 4, 6, 7, 8, 2, 3, true, 'Nandini', [ 3, 6, 7 ] ]
console.log(myArr);

myArr.unshift(9)  //[ 9, 1, 4, 6, 7, 8, 2, 3, true, 'Nandini', [ 3, 6, 7 ] ]
console.log(myArr);

myArr.shift() 
console.log(myArr);

console.log(myArr.includes(2)); //boolean
console.log(myArr.indexOf(2));

const newArr1 = myArr.join()
console.log(newArr1);
console.log(typeof newArr1); //String

console.log(`original array is ${myArr}`); //original array is 1,4,6,7,8,2,3,true,Nandini,3,6,7
const myn1 = myArr.slice(1,3)
console.log(myn1); //4,6
console.log(`After slicing `+myArr); //After slicing 1,4,6,7,8,2,3,true,Nandini,3,6,7
//doesnt affect the original array 

const myn2 = myArr.splice(1,3)
console.log(myn2); //4,6,7  
console.log(`After splicing `+myArr); // After splicing 1,8,2,3,true,Nandini,3,6,7
//splicing modifies the array permanently