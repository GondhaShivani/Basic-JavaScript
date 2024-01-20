
/*
1] What is Clouser?
-> clouser is a combination of function and its lexical scope bundeled together forms a clouser.

2] Explain more about clouser.
-> its like each and every function in JS has access to its outer lexical environment, its like access to the variables and functions which is present in the environment of its parents so it has each and every function has access to them. so even when this function executed in other scope not on its original scope it still remember its outer lexical environment which was originaly present in the code. that is what clouser is.
*/
/*
//3] give example.
function outer(){
    var a=10;
    function inner(){  //inner function has access of its lexical scope parent=outer function 
        console.log(a);
    }
    return inner;
}
//outer()();   <-- or
var close = outer();
close();
//inner function forms a clouser with its lexical scope.
*/


//example with parameter.
/*
function outer(b){
    var a=10;
    function inner(){  //inner function has access of its lexical scope parent=outer function 
        console.log(a,b);
    }
    return inner;
}
//outer()();   <-- or
var close = outer("Hello World");
close();
*/

/*
4] advantages of clousers
- used in module Pattern
- used in function carring
- used in some higher order function like memoice, once
- it helps in data hiding and encapsulation
*/

/*
5] what is data hiding and encapsulation?

function counter(){
    var count=0; //now this variable is hidden
    function incounter(){
        count++;
    }
}
console.log(count); //there is privacy over the count, u can not access - referencerror = count is not defined
*/

/*
6] disadvantages of clouser
- clouser consumes lot of memory
- variables are not like a garbage collector
- if clouser can not handle properly it can also freeze the browser
*/