//Constructor function is used to create objects . It uses Pascal notation
function Circle(radius){
    this.radius=radius;
    this.draw= function(){
        console.log('draw');
    }

}


const c1= new Circle(5)
console.log(c1.radius)
console.log(c1.draw())