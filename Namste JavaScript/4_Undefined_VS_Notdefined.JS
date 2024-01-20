/*                               Undefined VS Notdefined
-> undefined = very special keyword in JS
-> When code is written -> every function and variable have alocated memory even before run the code.
-> undefined is like a placeholder.
-> JS is loosly type language = very flexible language = weakly type language -> it means that it does not attaches variable to any specific data type.
-> When variable is declared but not assigned value, its current value is undefined. But when the variable itself is not declared but called in code, then it is not defined.
*/

/*                code:1
console.log(a); //output = undefined -> only memory is alocated therefore undefined
var a=10; //value is assigned.
console.log(a); //output = 10 -> bcz now value is assign therefor a=(undefined to 10)
console.log(x); // output = x is not defiend -> x is not defined anywhere therefor memory is also not alocated yet.
*/

/*                undefined and not undefined
var a;
console.log(a);
var x=9;
console.log(x);

if(x === undefined) // === -> strictly check
{
    console.log("x is undefined");
}
else
{
    console.log("x is not undefined");
}
*/

//flexible with data type no need to specify
var a;
console.log(a);//undefined
a=10;                  //int
console.log(a);//10
a="Hello";             //string
console.log(a);//Hello
a=undefined;           //not a good practice to assign undefined into any variable.
console.log(a);//undefined