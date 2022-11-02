class Student{

    // constructor(){
    //     let name,marks;
    // }
    static name;
    static marks; 

    static getName(){
        return this.name;
    }

    static setName(name){
        this.name=name;
    }

    static getMarks(){
        return this.marks;
    }

    static setMarks(marks){
        this.marks=marks;
    }
}

//let stu = new Student();

// calling setters method
// stu.setName("John");
// stu.setMarks(70);

// calling getters method
// console.log(stu.getName(),stu.getMarks());

Student.setName("John");
Student.setMarks(90);

console.log(Student.getName(),Student.getMarks());
