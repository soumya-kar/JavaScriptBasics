// using this we can give single comment
/* Using this
We can give 
Multi line commeny */

/*******Variables **********/


let x=10;
let y='10';
console.log(x!==y)


let userColour=false;
let defaultColour='Blue';
let currentColour=userColour || defaultColour;
console.log(currentColour); //Blue
let newClr= userColour && defaultColour;
console.log(newClr) //false



/*
Type Operators
typeof
Returns the type of a variable
We can use the typeof operator to find the data type of a JavaScript variable

instanceof
Returns true if an object is an instance of an object type
The instanceof operator returns a boolean value that indicates if an object is an instance of a particular class

*/
console.log('***')
console.log(typeof "Raghav");  //string
console.log(typeof 123);  //number
console.log(typeof false);  //booleab
console.log(typeof NaN);  //number
console.log(typeof [1,2,3,4]); //object
console.log(typeof null);  //object
console.log(typeof function(){});  //function


let lname='Kar';
console.log(lname instanceof String)  //false
//This is because we need to explicitly make it String like below
let fname= new String('Kar')
console.log(fname instanceof String)  //true

let A=1;
let B=2;
console.log(A&B)  //0
console.log(A|B)  //3


