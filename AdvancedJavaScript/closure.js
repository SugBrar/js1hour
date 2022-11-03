//closure
console.log('closure');
function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    //inner();
    return inner;
}

 const fn = outer();
 console.log(outer());
 fn();//first run(no pre state)
 fn();//second run(using first run pre state)

 //nested function
 console.log('nested function');
 function outerx(){
    let counter = 0;
    function innerx(){
        counter++;
        return counter
    }
    //inner();
    return innerx()
}

console.log(outerx());


outerx();//first run(no pre state)
outerx();//second run(no pre state available)

const d = outerx();
console.log(d);
console.log(d);


