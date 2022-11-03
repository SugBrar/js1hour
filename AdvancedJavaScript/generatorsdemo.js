// console.log('Normal function')
// function normalFunction(){
//     console.log('Hello')
//     console.log('World')
// }
// normalFunction()
// normalFunction()

// //generator function - that can stop midway and continue from where it was stop 
// //yield keyword is used - it is an operator with which generator can pause itself
// console.log('Generator function')
// function* generatorFunction(){
//     yield 'Hello'
//     yield 'World'
//     console.log('Print')
// }

// //invoking generator function
// const genObj = generatorFunction()
// for(const word of genObj){
//     console.log(word)
// }


function* genFun(i){
    yield i
    yield i+2
    yield i*3
}

const itgen = genFun(5)
console.log(itgen.next().value)
console.log(itgen.next().value)
console.log(itgen.next().value)
