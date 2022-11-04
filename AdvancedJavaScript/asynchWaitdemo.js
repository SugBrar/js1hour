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

// // await keyword - works only inside async function
// async function greet(){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('Hello'),1000)
//     });
//     let result = await promise; // wait until the promise resolves that is 1000 sec
//     console.log(result); // Hello
// }
// greet()

// sequential execution
function resolveHello() {
    return new Promise(resolve =>{
        setTimeout(function() { resolve('Hello')},2000)        
    })
}

function resolveWorld() {
    return new Promise(resolve =>{
        setTimeout(function() { resolve('World')},1000)        
    })
}

async function sequentialStart(){
    const hello = await resolveHello()
    console.log(hello) // logs after 2 seconds

    const world = await resolveWorld()
    console.log(world) // logs after 1 second 
    //total execution time = 3 seconds
}  
sequentialStart() 
