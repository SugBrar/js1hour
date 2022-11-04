// //Normal function
// function greet(){
//     return 'Hello'
// }
// console.log(greet())

// //async function
// async function greet1(){
//     return 'Hello'
// }
// console.log(greet1())

// // resolve function
// async function greet2(){
//     return Promise.resolve('Hello')
// }
// //console.log(greet2())


// greet2().then((value) => console.log(value))

// await keyword 
async function greet(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve('Hello'),1000)
    });
    let result = await promise; // wait until the promise resolves that is 1000 sec
    console.log(result); // Hello
}
greet()