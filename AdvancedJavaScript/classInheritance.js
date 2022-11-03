class Person{
    constructor(fName,lName){
        this.firstName = fName
        this.lastName = lName
    }
    sayName(){
        return this.firstName + ' ' + this.lastName
    }
}

const p1 = new Person('Bruce','Wayne') 
console.log(p1.sayName())

class SuperHero extends Person{
    constructor(fName,lName){
        super(fName,lName)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log('Fighting crime')
    }
}

const batman = new SuperHero('Bruce','Wayne')
console.log(batman.sayName())
batman.fightCrime()
