let myString1 = "Nandini" // we can denote using single or double quotes
let myString2 = " Satpathy"
let myString3 = myString1+myString2 //outdated

console.log(`Hello my name is ${myString3}`); //back ticks are called as String interpolation or creating placeholders where we can inject variable

const gameName = new String('Nandini-S-123-a') // stores in kv pair, 0:N, 1:a etc

console.log(gameName[0]); //0th index
console.log(gameName.__proto__); //getter and setter
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('n'));
console.log(gameName.substring(0,4)); // 0 is the start position and 4 are the number of characters we want
// we cannot give negative values here
console.log(gameName.slice(-8,4)); // reverse order

let gameName1 = "        Satpathy      "
console.log(gameName1.trim()); //works only on spaces and new line (\n)

let url = "https://nandini.com/nandini%23satpathy" //spaces are replaced with %
console.log(url.replace('%23','-'));

console.log(url.includes('nandini'));

console.log(gameName.split('-'));