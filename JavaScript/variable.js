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
