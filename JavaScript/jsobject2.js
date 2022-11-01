let employee =
{
    empName: "Scott",
    empId: 211,
    job: "Developer",
    basicSal: 60000,

    // when declared function inside the object, it is called as method

    bonus: function ()
    {
        return ((this.basicSal * 10)/100);
    }
};

console.log(employee.empName);
console.log(employee.bonus());
