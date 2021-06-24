//Arithmatic 
//assignment
//Ternary
//Comparison
//Logical
//Binary

//Arithmatic
let x=10;
let y=20;
console.log(x+y)  //30
console.log(x-y) //-10
console.log(y/x)  //2
console.log(x**y)  
console.log(2**3)  //8 ** operator is to the power operator

//++ and --
let p=1;
console.log(p++)  //1
console.log(p) //2
let q=1;
console.log(++q)  //2
console.log(p+q)  //4

//Assignment operator
let xo=10;
xo*=7;
console.log(xo) //70
//Strict Equality - type and value
console.log(xo===80)  //false
console.log(xo==='70')  //It will show false

//Loose Equality -only value
console.log(xo=='70') //It will show true



//Ternary operator
let points=110;
let type=points>100 ? 'Gold Member':'Silver memeber'
console.log(type)  //Gold Member

//logical operator
//AND &&
let highIncome=true;
let goodCreditScore=true;
let eligibleForLoan= highIncome&&goodCreditScore
console.log(eligibleForLoan) //true

//NOT(!)
let isActive=true;
console.log(!isActive)

//LogicalOperator with Non boolean
let userColour=false;
let defaultColour='Blue';
let currentColour=userColour || defaultColour;

console.log(currentColour);

//Swap two numbers
let a=10;
let b=20;
b=a+b;
a=b-a;
b=b-a;
console.log('a:'+a);
console.log('b:'+b)




//Control statement

if(condition){
    //---
}
else{
    //----
}















