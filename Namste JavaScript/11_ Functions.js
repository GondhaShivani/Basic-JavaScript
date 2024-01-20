/*
[] What are first class functions?
[] Function Statement VS function Expression VS function Deeclaration ?
*/

/*
//--------------------1] Function Statement : (also known as) Function Declaration :
function a()
{
    console.log("a called...");
}
a();
*/

/*
//-------------------------------2] Function Expression :
//function acts like Value.
var b = function(){
    console.log("b called...");
}
b();
*/

/*
-------------------------3] difference between  Function Statement & Function Expression 
-> Hoisting
function calling before declaration of function in both reacts different.
*/

/*
a();
b();

//1] Function Statement :
function a()
{
    console.log("a called...");
}
//during memory creation -> a is created a memory and the function is assigned to a.

//2] Function Expression :
var b = function(){
    console.log("b called...");
}
//in function expression b is a variable -> it assigned undefined initially untill code define function.
*/ 

/*
----------------------------------------4] Anonymous function :
- A function without a name is called anonymous function.
- Anonymous function does not have thier own identity.

function () {             //syntex error : function statements require a function name 
}

- Anonymous function are used in a place where fun are used as values.
*/

/*
----------------------------------5] Named function Expression :
- same as function expression but only change is that we have to give function name instead of annonymous.
*/
/*
var b = function xyz() {
    console.log("b called...");
}
b();           //b called...
xyz();         //reference error : xyz is not defined.
//bcz xyz is not a fun it assigned to a variable.
*/

//if u want to access xyz you can access it over in function.
/*
var b = function xyz() {
    console.log(xyz);
    console.log("b called...");
}
b();
*/

//------------------------6] Difference between parameters and arguments :
/*
var b = function (param1, param2) {
    console.log("b called...");
}
b(1, 2);          //b(arg1, arg2)
*/


//--------------------------------7] Firstclass function :
//- The ability of functions to be used as values and can be passed as an argument to onther function and can be returned from the function this ability is known as first class function. 

//            ex1. fun in arg
/*
var b = function(param1){
    console.log("b called...");
    console.log(param1);
}

b( 
    function() {
        console.log("hello");
    }
);
*/

//           ex2.  fun inside fun
/*
var b = function(param1){
            console.log(param1);
        }
    function xyz(){
    }

b(xyz);
*/

//           ex3.   fun return
/*
var b = function(){
    return function () {

    }
}

console.log( b() );
*/

//--------------------------------8] Firstclass citizens :
//Ability to be used like values makes the function as Firstclass citizens.


//--------------------------------9] Arrow Functions :
// - let, const, arrow fun this is introduced in ES6.