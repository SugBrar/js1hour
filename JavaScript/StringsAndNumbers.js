// Different methods on Strings

let s = "Welcome";
//let s = new String();

// charAt() - extract/retreive specific character based on the index we pass
console.log(s.charAt(3));

//concat() - concatenate 2 or more strings
console.log(s.concat(" to Crown Real Estate"));

console.log(s.concat(" to Crown Real Estate").concat(" - Nav Gill"));

//replace() - can replace specific character/string from the main string
s = "Welcome to JavaScript";
console.log(s.replace("JavaScript","Java"));

//substring() - extract some portin from the main string
s = "Welcome";
console.log(s.substring(0,3)); //wel
console.log(s.substring(3,7)); //come

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

// trim() - spaces can be deleted in the string
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