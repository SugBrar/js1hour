
class student{
    setDetails(){
        this.sid = 102;
        this.sname="John";
        this.grade="A";
    }
    display(){
        console.log(this.sid,this.sname,this.grade);
    }

}

let stu = new student();
stu.setDetails();
stu.display();