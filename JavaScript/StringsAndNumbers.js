// Different methods on Strings

let s = "Welcome";
//let s = new String();

// charAt() - extract/retreive specific character based on the index we pass
console.log(s.charAt(3)); //c

//concat() - concatenate 2 or more strings
console.log(s.concat(" to Crown Real Estate")); //Welcome to Crown Real Estate

console.log(s.concat(" to Crown Real Estate").concat(" - Nav Gill")); //Welcome to Crown Real Estate - Nav Gill

//replace() - can replace specific character/string from the main string
s = "Welcome to JavaScript";
console.log(s.replace("JavaScript","Java"));//Welcome to Java
console.log(s.replace("Wel","Jewel")); //Jewelcome to JavaScript

//substring() - extract some portin from the main string
s = "Welcome";
console.log(s.substring(2,4)); //lc
console.log(s.substring(3,6)); //com

// toLowerCase() & toUpperCase()
s = "WELcome";
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//split() - can split the string into multiple parts
s = "Welcome to JavaScript";
let sr = s.split(' ');

console.log(sr[0]);
console.log(sr[1]);
console.log(sr[2]);

// trim() - spaces at the front and end in the string can be deleted 
s = "    Welcome    ";
console.log(s);
console.log(s.trim());


// Different methods on Numbers
//let x = 100;
//let x = new Number(100);

let x = 102;    // integer
let y = 99.6;   // decimal
let z = 10e2;   // exponential value

console.log(x,y,z);

//isInteger() - check whether given number is integer or not
x = 10;
y = 2.1;
z = 'x';

console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(y)); // false
console.log(Number.isInteger(z)); // false

//parseInt() - convert a string into number
s ="1258";
console.log(typeof(s)); // string
console.log(Number.parseInt(s)); //1258
console.log(typeof(Number.parseInt(s))); //number

//parseFloat() - convert string into number
s = "125.53";
console.log(typeof(s)); // string
console.log(Number.parseFloat(s)); //125.53
console.log(typeof(Number.parseFloat(s))); //number

// toString() - convert number into a string
s1 = 1258;
s2 = 52.8;
console.log(typeof(s1)); // number
console.log(typeof(Number.toString(s1))); //string
console.log(typeof(s2)); // number
console.log(typeof(Number.toString(s2))); //string

