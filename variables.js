// let name='soumya'
// let age='27'
// let color='red'
// console.log(name+' '+age)
// console.log(2+2)


// var counter;
// counter = 1;
// console.log(counter); 

// let foo;
// console.log(typeof foo);
//  foo = 120; // foo is a number
// console.log(typeof foo);
// foo = false;   // foo is now a boolean
// console.log(typeof foo);
// foo = "foo";   // foo is now a string
// let obj = null;
// console.log(typeof obj); // object
// console.log(typeof foo);
// console.log('a'/2); // NaN;
// console.log(NaN/2); // NaN
// console.log(NaN == NaN); // false
// console.log(null == undefined); // true
//In this example, s is a string. However, when we placed the unary plus operator in front of it, the string s is converted to a number.
let s = '10';
console.log(+s); // 10

// The simplest operators in JavaScript are unary operators. A unary operator works on one operand. The unary operators in JavaScript are:

// Unary plus (+)  – convert an operand into a number
// Unary minus (-) – convert an operand into a number and negate the value after that.
// prefix / postfix increments (++) – add one to its operand
// prefix / postfix decrements (--) – subtract one from its operand.

let a = 10;
a = +a; // 10
a = -a; // -10

// // When you apply the unary plus or minus on an object that has the valueOf() method,
// //  the method is called to return the converted value.
// let product = {
//     valueOf: function () {
//         return 60;
//     }
// };
// console.log(+product); // 60

// let x = 10, y = 20;
// let z = --x + y;
// console.log(z); // 29


// let x = 10, y = 20;
// let z = x++ + y;
// console.log(z); // 30
// console.log(x); //11

// //Strict Equality - type and value
// let xo='70'
// console.log(xo==70)  //true
// console.log(xo===70)  //It will show false

//LogicalOperator with Non boolean
let userColour=false;
let defaultColour='Blue';
let currentColour=userColour || defaultColour;
console.log(currentColour); //Blue
Arrays

//for of loop
// it is used to get value from array

const colors=['red', 'green', 'blue']
for(let color of colors){
    console.log(color);
}

// using this we can give single comment
/* Using this
We can give 
Multi line commeny */



