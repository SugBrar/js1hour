let person =
{ firstName:"John",
lastName:"Kenndy",
age: 45,
weight: 67
}

// // Accessing object properties

// console.log(person["firstName"]);
// console.log(person.age);

// // add new property to the existing object e.g add height 
// //person["height"] =5.6;
// person.height =5.8;
// console.log(person.height);


// // update the existing propertyof the object
// person.weight = 75;
// console.log(person.weight);

// //Remove the propeerty from the object
// delete person.age;
// console.log(person.age);

// for in loop in objects
for(let x in person) 
{
    //console.log(x); // print only name of the property of the object
    //console.log(person[x]); // print only value of the property of the object
    console.log(x+": "+person[x]); // print property name and corresding values of the object
}