function Student (){
    this.name = "David";
    this.gender = "Male";
}



//created object 1
stu1 = new Student();
console.log(stu1.name,stu1.gender); //David Male
// declare another variable in the Student function
stu1.age = 28;
console.log(stu1.name,stu1.gender,stu1.age);    //David Male 28

// created object 2
stu2 = new Student();
console.log(stu2.name,stu2.gender,stu2.age);   //David Male undefined 
// age was declared by object 1 that is why is undefined

//using prototype,all objects created below will be able to access variable age 
Student.prototype.age=25;
 
//create object 3
stu3 = new Student();
console.log(stu3.name,stu3.gender,stu3.age);  

//create object 4
stu4 = new Student();
console.log(stu4.name,stu4.gender,stu4.age); 
