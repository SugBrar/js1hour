class Student{

    constructor(){
        let name,marks;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }

    getMarks(){
        return this.marks;
    }

    setMarks(marks){
        this.marks=marks;
    }
}

let stu = new Student();

// calling setters method
stu.setName("John");
stu.setMarks(70);

// calling getters method
console.log(stu.getName(),stu.getMarks());
