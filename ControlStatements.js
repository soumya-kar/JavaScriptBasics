//If else
// let a=100;
// let b=200;
// let c=300;

// if(a>b && a>c){
//     console.log('a is the largest')
// }
// else if(b>c){
//     console.log('b is the largest')
// }
// else{
//     console.log('c is the largest')
// }

//Switch case

let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}
console.log(dayName); // Tuesday