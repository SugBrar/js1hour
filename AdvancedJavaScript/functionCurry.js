// simple function with multiple arguments
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(2,3,4));


//curry function - sum(2,3,4) to sum(2)(3)(4)
function curry (fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(4));

const add2 = curriedSum(2);
const add3 = add2(3);
const add4 = add3(4);
console.log(add4);


