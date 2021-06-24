//data types
let name='soumya'
let age='27'
let color='red'
console.log(name+' '+age)
console.log(2+2)

const range=5
//range=8
console.log(range)

let s1="Hello world"
let flag=true
console.log(typeof s1)
console.log(typeof flag)

//Objects:
let user ={
    name: "Tom",
    age: 30
}

console.log(user)
console.log(user.name)
console.log(user.age)

//2. Bracket notation
user['name']='Marry'
console.log(user.name)

//Arrays:
//List of objects
let language=['java', 'javascript', 'c', 'python']
console.log(language)
console.log(language.length)

language[2]='Ruby'
console.log(language)

console.log(language[7])

console.log(typeof language)

//Function name
function getName(){
    console.log("This is my function")
}

//call the function
getName()

function greet(name){
    console.log('hello'+' '+ name)
}

greet('Soumya')
