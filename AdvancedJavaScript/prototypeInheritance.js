function Person(fName,lName){
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

function SuperHero(fName,lName){
    Person.call(this,fName,lName)
    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function(){
    console.log('Fighting Crime')
}

SuperHero.prototype = Object.create(Person.prototype) // SuperHero will call getFullName method through object-Person

const batman = new SuperHero('Peter','Wayne')
SuperHero.prototype.construtor = SuperHero
console.log(batman.getFullName())


// function greet(name){
//     console.log('Hello',name)
// }
// greet ("Elahi")