class Animal{
    constructor(color){
        this.color=color;
    }
    printColor(){
        console.log("Color: ",this.color);

    }
}

class Dog extends Animal{
    constructor(color,food){
        super(color);
        this.food = food;
    }
    eating(){
        console.log("Eating: ",this.food);
    }
    display(){
        this.printColor();
        this.eating();
    }
}

a = new Animal("Brown");
a.printColor();
d = new Dog("Black","Bread");
d.display();

class Monkey extends Dog{
    constructor(color,food,activity){
        super(color,food);
        this.activity = activity;        
    }
    perform(){
        console.log("Activity: ",this.activity);
    }
    show(){
        this.display();
        this.perform();
    }
}

c = new Monkey("Brown","Banana","Jump");
c.show();