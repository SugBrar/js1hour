// simple function
// function sayMyName(name){
//     console.log(`My name is ${name}`)
// }

// sayMyName('Walter')
// sayMyName('Peter')

//Implicit binding
const person = {
    name: 'Vishwas',
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}

// person.sayMyName()
// console.log(person.name);

//Explicit binding
 function sayMyName() {
    console.log(`My name is ${this.name}`)
}
//sayMyName.call(person)

// New binding
function Person(name){
    this.name = name
}

const p1 = new Person('Peter')
const p2 = new Person('Batman')

//console.log(p1.name,p2.name)

//Default binidng
sayMyName()



