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

// // sequential execution
// async function sequentialStart(){
//     const hello = await resolveHello()
//     console.log(hello) // logs after 2 seconds

//     const world = await resolveWorld()
//     console.log(world) // logs after 1 second 
//     //total execution time = 3 seconds
// }  
// sequentialStart() 

//concurrent execution - used when loading different part of the page
// async function concurrentStart(){
//     const hello = resolveHello()
//     const world = resolveWorld()

//     console.log( await hello) // logs after 2 seconds
//     console.log( await world) // logs after 2 seconds 
//     //total execution time = 2 seconds
// }  
// concurrentStart()

//parallel execution
function parallel(){
    Promise.all([
     (async () => console.log(await resolveHello()))(), // logs after 2 seconds
     (async () => console.log(await resolveWorld()))()  // logs after 1 second
    ])
}
parallel()
