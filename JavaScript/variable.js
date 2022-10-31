// variables - 1. var (function scope)
var x ="Hello", y= 150;

document.write(x);
console.log(y);

// 2. let (block scope)
let text;
text = 'Welcome';

console.log(text);

// 3. const
const z= 149;
console.log(z);
//z= 900;  because z is constant and cannot be changed
console.log(z);


// Primitive datatypes 
let number = 190;
console.log(typeof(number)); // number

let price = 30.52;
console.log(typeof(price)); // number

let stuName = 'John';
console.log(typeof(stuName)); // string

let flag = false;
console.log(typeof(flag)); // boolean

let value;
console.log(typeof(value)); //undefined

let status = null;
console.log(typeof(status)); // null as object

