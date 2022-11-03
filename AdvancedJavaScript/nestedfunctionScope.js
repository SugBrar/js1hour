// Nested functions have access to variables declared in their own scope as well as 
// variables declared in the outer scope

let a = 10; // global scope
function outer(){
    let b = 20; //function scope
    function inner(){
        let c = 30; //function scope
        console.log(a,b,c);
    }
    inner();
}
outer();