//Enumerating properties of an object
//Get all the properties of an object

const circle ={
    radius : 1,
    draw(){
        console.log('draw');
    }
}

//1. for in loop
for(let key in circle)
    console.log(key, circle[key])

console.log('---------')

//2. Using for of loop
for(let key of Object.keys(circle))
    console.log(key)

for(let key of Object.entries(circle))
    console.log(key)

    //3 In operator:
    //check a property in an object
    if('price' in circle){
        console.log('yes')
    }
    else{
        console.log('No')
    }
    if('draw' in circle){
        console.log('yes')
    }
    else{
        console.log('No')
    }
