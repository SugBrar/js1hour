class Employee{
    constructor(eid,ename){
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.sal = 50000;

emp1 = new Employee(213,"David");
console.log(emp1.eid,emp1.ename,emp1.sal);

emp2 = new Employee(445,"Smith");
console.log(emp2.eid,emp2.ename,emp2.sal);


