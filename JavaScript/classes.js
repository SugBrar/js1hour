
class student{

    constructor(sid,sname,grade){
            this.sid = sid;
            this.sname = sname;
            this.grade = grade;
    }
    // setDetails(stid,stname,stgrade){
    //     this.sid = stid;
    //     this.sname=stname;
    //     this.grade=stgrade;
    // }
    display(){
        console.log(this.sid,this.sname,this.grade);
    }

}

// created object 
let stu = new student(35,"John","A");
//stu.setDetails(21,"John","A");
stu.display();