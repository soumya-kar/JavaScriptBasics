//for loop
//While loop
//Do while
//for...in
//for...of
//infinite loop


// for loop
for(let i=0; i<10; i++){
    console.log(i);
        if(i%2===0)
            console.log('hi this is java script')
}

// while
let i=1;
while(i<=10){
    console.log(i)
    i++
}
console.log('------------------')
//do while
let p=10;
do{
    console.log(p);
    p++;
}
while(p<=20);


//for in loop:
//for object

const person= {
    name: 'Naveen',
    age: 25
};

for(let key in person)
    console.log(key+' '+ person[key])

//Arrays

const colors=['red', 'green', 'blue']

for(let index in colors){
    console.log(index, colors[index]);
}


//for of loop
// it is used to get value from array

for(let color of colors){
    console.log(color);
}



