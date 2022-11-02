
class student{
    setDetails(stid,stname,stgrade){
        this.sid = stid;
        this.sname=stname;
        this.grade=stgrade;
    }
    display(){
        console.log(this.sid,this.sname,this.grade);
    }

}

let stu = new student();
stu.setDetails(21,"John","A");
stu.display();