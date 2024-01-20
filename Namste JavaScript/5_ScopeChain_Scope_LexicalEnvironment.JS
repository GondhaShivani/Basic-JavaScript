/*
-> scope in Js is directly related to or directly dependent on the lexical Environment.
-> scope means where you can access specific veriable or a function in code.
-> lexical = hierarchy sequence.
-> whenever a Execution context is created a lexical environment is also created.
-> so lexical environment is the local memory along with the lexical environment of it's parent.
-> lexical environment = where the code is present physically.
-> lexical environment = local memory +  reference to the lexical environment of parent. -> parent = it means lexical parents where the actualy code present.
-> In any EC -> something(some specific data) is there in the memory space which is points to the reference of it's parent lexical environment. 
-> scope chain = The process of going one by one to parent and checking for values is called scope chain or Lexcial environment chain.
-> if JS engine does not find anything in the local memory it goes one next level of this scope chain up and up.
-> 
-> Ex-4 : c fun is lexically seat in the a function.
*/



/*                            //Example 1
function a()
{
    console.log(b); //accessing before declaring
} 
var b=10;
a();    
//output: 10
*/


/*                             //Example 2
function a()
{
    c();        //modification
    function c()
    {
        console.log(b); //accessing before declaring
    }
} 
var b=10;
a();    
//output: 10
*/


/*                             //Example 3
function a()
{
    var b=10;       //loacal variable
    c();
    function c()
    {
        console.log(b); //accessing before declaring
    }
} 
a();   
var b = 100;   //global variable
//output: 10 is printed meaning local variable of the same name took precedence over a global variable.
*/

/*                             //Example 4
function a()
{
    var b=10;       
    c();
    function c()
    {
    
    }
} 
a();    
console.log(b);      //modification
//output: b is not defined
*/
