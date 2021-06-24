const circle={
    radius: 1,
    color: 'red',
    log(){

    }
}

console.log(circle)
circle.price=2400;
console.log(circle)
circle.draw=function() {
    console.log('hello')
}
console.log(circle)

delete circle.radius

console.log(circle)