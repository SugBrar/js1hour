let fruits = ["Banana","Apple","Mango","Kiwi"];

// toString() - convert the array into string and elements are separated by comma 
//& join() - convert the array into string and elements can be separated by symbol of your choice
console.log(fruits.toString());
console.log(fruits.join("*"));

//pop() - remove the last element of the array and return the value of removed element
fruits = ["Banana","Apple","Mango","Kiwi"];
console.log(fruits.pop());
console.log(fruits);

//push() - add new element in the end of the existing array and return the length of new array
fruits = ["Banana","Apple","Mango","Kiwi"];
console.log(fruits.push("Orange"));
console.log(fruits);

//shift() - remove first element of the array and shift all the other elements to lower index 
//and returning the value of remove element
fruits = ["Banana","Apple","Mango","Kiwi"];
console.log(fruits.shift());
console.log(fruits);

//unshift() - add new element at the first place of the array and move other elements to higher index
// and return the length of the new array
fruits = ["Banana","Mango","Kiwi"];
console.log(fruits.unshift("Lemon"));
console.log(fruits);

//deleting element from the array
fruits = ["Banana","Apple","Mango","Kiwi"];
delete fruits[2];
console.log(fruits);

// concat() - join/merge 2 or more arrays
let arr1=[10,20];
let arr2=["A","B","C"];
console.log(arr1.concat(arr2));

let arr3 =["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//slice() - create a new array by extracting some elements from the existing array
// and return the values of the extracted elements from the existing array
fruits = [ 'Banana', 'Apple', 'Mango', 'Kiwi', 'Orange' ]
console.log(fruits.slice(1));
console.log(fruits.slice(2));

//sort() - arrange the elements of the array in alphabetic order 
fruits = ["Banana","Apple","Mango","Kiwi","Lemon"];
console.log(fruits.sort());

// for number arrays - first convert the array into float using Float64array()
let nums= new Float64Array([20,120,5,42]);
//let nums= [20,10,50,40];
//let nums= [20,12,52,42];
console.log(nums.sort());

// reverse() - reverse the elements of the array and change the existing array
fruits = ["Banana","Apple","Mango","Kiwi","Lemon"];
console.log("Original Array Elements: "+ fruits);
fruits.reverse();
console.log("Reverse Array Elements: "+ fruits);