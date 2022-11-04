//Normal function
function greet(){
    return 'Hello'
}
console.log(greet())

//async function
async function greet1(){
    return 'Hello'
}
console.log(greet1())

// resolve function
async function greet2(){
    return Promise.resolve('Hello')
}
//console.log(greet2())


greet2().then((value) => console.log(value))

