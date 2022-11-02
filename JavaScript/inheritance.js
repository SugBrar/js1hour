//Parent Class
class A{
    a=100;
    display(){
        console.log(this.a);
    }
}

//Child Class
class B extends A{
    b=90;
    show(){
        console.log(this.b);
    }
}


objA = new A();
console.log("Parent class")
objA.display();


objB = new B();
console.log("Child Class")
objB.display();
objB.show();