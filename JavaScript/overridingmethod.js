class Bank{
    roi(){
        return 0;
    }
}
class Axis extends Bank{
    roi(){
        return 9.8;
    }
}

class SBI extends Bank{
    roi(){
        return 12.5;
    }
}

sbi = new SBI();
console.log(sbi.roi());

axobj = new Axis();
console.log(axobj.roi());
