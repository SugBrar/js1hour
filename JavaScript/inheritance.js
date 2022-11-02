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

// //Grandchild Class
// class C extends B{
//     c = 70;
//     view(){
//         console.log(this.c);
//     }
// }

//child Class
class C extends A{
    c = 70;
    view(){
        console.log(this.c);
    }
}

objA = new A();
console.log("Parent class");
objA.display();


objB = new B();
console.log("Child Class of A");
objB.display();
objB.show();

objC = new C();
console.log("Child Class of A");
objC.display();
// objC.show();
objC.view();