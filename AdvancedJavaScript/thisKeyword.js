// simple function
function sayMyName(name){
    console.log(`My name is ${name}`)
}

sayMyName('Walter')
sayMyName('Peter')

//Implicit binding
const person = {
    name: 'Vishwas',
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}

person.sayMyName()
console.log(person.name);

