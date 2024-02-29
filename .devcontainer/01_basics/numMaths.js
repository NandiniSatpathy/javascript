const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString());//string form
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //precision value 100.00

const otherNum = 23.4567
console.log(otherNum.toPrecision(3)); //precise vaue with round off, 3 shows how many values

const hundreds = 100000000
console.log(hundreds.toLocaleString()); //US STD
console.log(hundreds.toLocaleString('en-IN')); //INDIAN STD

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//################## MATHS #######################

console.log(Math.PI);
console.log(Math.abs(-67)); //gives only positive values, pos -> pos, neg -> pos
console.log(Math.round(4.32)); 
console.log(Math.ceil(4.32));  //5
console.log(Math.floor(4.32));  //4 round off to lowest value
console.log(Math.min(2,5,7,1));
console.log(Math.max(2,5,7,1));
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
//if range is between min and max
console.log(Math.floor(Math.random() * (max - min + 1) + min))