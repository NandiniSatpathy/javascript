let a = 20  // global scope
const b = 45
var c  = 32 

let a1 = 1000

//{} this will determine the scope
if(true){
let a1 = 20 //local scope
const b1 = 45
var c1  = 32 
d1 = 46
console.log("Inner "+a1); //here it will be 20
}
 //
console.log(a1); // error
console.log(b1); //error
console.log(c1); //it will print, that is why we should not use var
console.log(d1); //it will also print, it is wrong way of assiging

console.log(a1); // it will give us result as 1000, it will give us global scope answer


function one(){
    const userName1 = "nandini"

    function two(){
        const userName2 = "satpathy" //child can access parent variables
    }
}

if(true){
    const username23 = "Nandini"
    if(username23 === "Nandini"){
        const website = "nan@gmail.com"
        console.log(username23+website);
    }
    console.log(website); //this will give error
}

console.log(username23);//this will give error

//+++++++++++++++++++++++++ INTERESTING CONCEPT +++++++++++++++++++++++++++++++++++
//scenario 1
addOne(5) // if the function is called before declaration it will work fine and give result

function addOne(num){   //basic function
    return num+1
}


addTwo(3) // we will get error if the function is called before declaration. The type of function declaration is different. Here the function is held inside a variable
const addTwo = function(num){   //expression, js variables are very powerful, they can take functions also
    return num+2
}

addTwo(4) // this will work