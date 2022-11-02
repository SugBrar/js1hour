class Employee{
    constructor(eid,ename){
        this.eid = eid;
        this.ename = ename;
    }
}
//adding variable to the class constructor using prototype
Employee.prototype.sal = 50000;

//adding function to the class using prototype
Employee.prototype.display = function(){
    console.log(this.eid,this.ename,this.sal);
}

emp1 = new Employee(213,"David");
//console.log(emp1.eid,emp1.ename,emp1.sal);
emp1.display();

emp2 = new Employee(445,"Smith");
//console.log(emp2.eid,emp2.ename,emp2.sal);
emp2.display();

