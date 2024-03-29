// Primitive Datatypes : & Types

// String, Number, Boolean, Undefined, Null, Symbol, Bigint 



const score = 100
const scoreValue = 100.3
const isLoggedin = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =   345467790877n


// Reference : Non-Primitive

// Aray,  Objects, Functions 

const car = ["BMW", "Audi", "Tata"]   // => Aray

// =>Objects

let myObj = {                        
    name: "Hari",
    age : 28,
}

// => Functions

const myFunction = function(){
    console.log("Hello World")
}


// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedin);
console.log(typeof userEmail);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ***********************************************************

// Stack (Primitive), Heap ( Non-Primitive) Memory

let myYoutubename = "shyambiharisevakdal"

let anotherName = myYoutubename
anotherName = "Shyam Bihari Sevak Dal"

console.log(anotherName);
console.log(myYoutubename);

// Heap Memory

let userOne = {
    email: "sharmahari4257@gmail.com",
    mob: 8865959112
}

let userTwo = userOne
userTwo.email = "hari@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);