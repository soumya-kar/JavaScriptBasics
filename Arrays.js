const number=[3,4,6];
//print the array
console.log(number)  //[ 3, 4, 6 ]
//print the second element in the array
console.log(number[1])  //4

let els= new Array(4);
els[0]="1BHK";
els[1]="2BHK";
els[2]="3BHK";
els[3]="4BHK";

console.log(els)  //[ '1BHK', '2BHK', '3BHK', '4BHK' ]

//add multiple elements
//Appends new elements to an array, and returns the new length of the array
number.push(6,7)
console.log(number)  //[ 3, 4, 6, 6, 7 ]

//Inserts new elements at the start of an array.
number.unshift(1, 2)
console.log(number)  //[ 1, 2, 3, 4, 6, 6, 7]

//add num at middle of the array
number.splice(2, 0, 'a', 'b')  //will add after second number
console.log(number)

//find a num
console.log(number.includes(2))

//Array can have objects
const studens = [
    {name: 'Rahul',Roll: 21},
    {name: 'Bittu', Roll: 32}

]

const c1=studens.find(function(student){
    return student.name==='Rahul'
});

console.log(c1)
//lamda function
const c2=studens.find(student => student.name==='Bittu');
console.log(c2)