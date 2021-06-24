//var and functions should be defined in an object
//key : value pair format

const circle={
    radius : 1,
    isVisible: true, 
    location : {
        x: 1,
        y: 1
    },
    draw : function(){
        console.log('draw')
    }
}

console.log(circle.radius)
console.log(circle)

console.log('--------------------------------')
console.log('Factory function : it produces objects')
function trignomentry(radius){
    return {
        radius,
        draw(){
            console.log('draw')
        }
    }
    
}

console.log(trignomentry(10).radius);
console.log(trignomentry(10).draw());





