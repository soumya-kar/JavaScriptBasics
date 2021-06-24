const circle ={
    radius : 1,
    draw(){
        console.log('draw')
    }
}

//1. using for in loop
const temp={}
for(let key in circle)
    temp[key]=circle[key]

console.log(temp)

//2. Using Object.assign() 
const another =Object.assign({}, circle);
console.log(another);

//3. Using spread ... operator
const new1= {...circle}
console.log(new1)

