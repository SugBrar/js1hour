let x = 15, y = 12, z = 2;

// if (x>y){
//     if (x>z){
//         console.log("X is largest number");
//     }
//     else {
//         console.log("z is largest number");
//     }
// }
// else if (y>z) {
//     console.log("Y is the largest");
// }
// else {
//     console.log("z is largest number");
// }    

if (x>y && x>z){
    console.log("X is largest number");
}
else if(y>z && y>x){
    console.log("Y is the largest");
}
else{
    console.log("z is largest number");
}
