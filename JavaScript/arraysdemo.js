//let cars =["saab","volvo","BMW"];
let cars = new Array("saab","volvo","BMW");
console.log(cars);

console.log(cars[1]); // accessing elements

cars[0] = "Opel"; // change the value 
console.log(cars);

// variables of different types in the same array
let myarray = [100,"Welcome",10.15,true];
console.log(myarray);

//objects in the array
let person1 ={
    name:"John",
    age: 30
    };

let person2 = {
    name:"Peter",
    age: 33
    };

let myarray1 =[person1,person2];
console.log(myarray1);
console.log(myarray1[0]);

let fruits =["Banana","Orange","Grapes","Apple"];
console.log(fruits.length);

//looping elements from array
for(let i=0;i<=(fruits.length)-1;i++)
{
    console.log(fruits[i]);
}

//looping elements from array using for of loop
for(ele of fruits){
    console.log(ele);
}

//Recognize an array - typeof
console.log(typeof fruits); //object

console.log(Array.isArray(fruits)); //true

