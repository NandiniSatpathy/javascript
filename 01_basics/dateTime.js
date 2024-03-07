// date
let myDate = new Date()

console.log(myDate);
console.log(myDate.toString()); // Thu Feb 29 2024 07:38:23 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); // 2/29/2024, 7:41:14 AM
console.log(myDate.toLocaleDateString()); // 2/29/2024
console.log(myDate.toLocaleTimeString()); // 7:41:14 AM
console.log(myDate.toDateString()); // Thu Feb 29 2024
console.log(myDate.toTimeString()); //07:41:14 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON()); // 2024-02-29T07:41:14.890Z
console.log(myDate.toISOString());// 2024-02-29T07:41:14.890Z

console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 10, 19) //month starts from 0 in JS
console.log(myCreatedDate.toDateString()); //Sun Nov 19 2023

let myCreatedDate2 = new Date(2023, 9, 19, 11, 34)
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1709193218638 it is in milliseconds
console.log(myCreatedDate.getTime()); //1700352000000 using these we can compare two time stamps
//to get seconds
console.log(Math.floor(myCreatedDate.getTime()/1000)); //1700352000

let newDate = new Date()
console.log(newDate.getMonth()); //1 - feb
console.log(newDate.getMonth()  + 1); // 2 actual month

newDate.toLocaleString("default",{
    weekday:"long"
})