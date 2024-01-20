/*                                    Theory
->"clouser" : closures basically means that a function bind together with its lexical environment.
  (function along with its lexical scope - forms a closures ) (code:1)
-> functions are heart of JS.
-> you can assign function to an variable also. (code:2)
->                               Few common uses of clousers
1. Modulo design pattern
2. currying
3.Functions like once - you can make a fun which is only run once.
4. memoize
5. maintaining state "in async" world
6. setTimeouts
7. Iterators
8. and many more...
*/

/*              //code:1 - closures
//function y forms a closures and it has access to its parents lexical scope - a.
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}
x();
*/

/*               //code:2 - function assign to a variable
function x(){
    var a = function y()
            {
                console.log(a);
            };
    y();
}
x();
*/

/*                //code:3 - pass function inside function parameter.
function x(){                    
    var a = 7;
    y();
}
x(function y()
  {
    console.log(a);
  }
);
*/

/*               //code:4 - you can return the function from function
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;  //return function y.
} //when this line execute fun x is gone from call stack and from everywhere.
var z = x();  //but var z have reference of fun y because we return y. //whats return function y is store in z. 
console.log(z);  //prints what store in z
//output: function y - body.

//................ after thousand line code.

z(); //when we call z -> z=x(); -> in x() -> a=7 and y() -> in y() console.log(a) and return y -> therefore z() -> prints console.log(a)=7. 

//when fun returned from onther fun it still maintains their lexical scope //here in code return fun y and in lexical scope a=7. //clouser remember what they were actually present. //from line 8 no x() is no longer exist but fun y remember their lexical scope where it came from.

//"Important" :: whenever you return a function not only fucntion body is return but return "clouser" a function with its lexical scope which is called clouser that was returned.
*/

/*              //code:5 - instead of return word... line 3rd return function
function x(){                    
    var a = 7;
    return function y()
    {
        console.log(a);
    }
    //return y(); 
}
var z = x();
console.log(z);  //output:function body
z();  //output:7
*/

/*                //code:6 - change value of a
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a = 100; //updated a.
    return y;
}
var z = x();
console.log(z);  //output:function body
//...............
z(); //output=100 //bcz function refers to a reference of a not remember value of a therefore print updated value of a=100.
*/

                //code:7 - whole code inside anthor function
function z()
{
    var b=9;         //parent's parent scope
    function x()
    {
        var a=7;                    //parent scope
        function y()
        {
            console.log(a,b); //from this line y make a clouser function body + lexical scope of x and y. therefore it has reference of a and b.
        }
        y();
    }
    x();
}
z();


