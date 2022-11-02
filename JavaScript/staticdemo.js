class Test{
    
    a =10; // Non-static variable
    static b=20; // Static Variable
    
    // Non-static method
    m1(){
        console.log("This is non-static method");
    }
    
    //Sattic Method
    static m2(){
        console.log("This is static method");
    }

}

// 1- Directly access static variables and methods using class name
//console.log(Test.a); //undefined
console.log(Test.b); //20
// changing value of static variable
Test.b = 500; //500
console.log(Test.b);

//Test.m1(); //error,Test.m1 is not a function
Test.m2(); //This is static method

// 2- Non-static Variables and methods can be accessed uisng Objects
let t = new Test();
console.log(t.a);
t.m1();