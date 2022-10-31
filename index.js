// this is my first javascript code
console.log('Hello World');

//variables
let name ='Gill';
console.log(name);

//constants
const intrestRate =0.3;
//intrestRate =1;
console.log(intrestRate);

// Premitives/Value Type
let nameP = 'Elahi'; // String literal
let age = 1; // Number literal
let isApproved = true; // Boolean literal
let firstName = undefined;
let selectedColor = null;

//object
let person = {
    pName: 'Elahi',
    pAge: 2
};

//Dot Notation - easy to use
person.pName = 'Gill';
console.log(person.pName);

// Bracket Notation 
person['pAge'] = 35;
console.log(person.pAge);

// Bracket Notation - runtime change selection
let selection = 'pName';
person[selection] = 'Navdeep';
console.log(person.pName) ;

// Arrays
let selectColors = ['red','blue', 'green'];
selectColors[3] = 2 ;
console.log(selectColors);
console.log(selectColors[1]);
console.log(selectColors.length);