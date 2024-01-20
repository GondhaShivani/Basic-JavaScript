/*             topic=1 : let and const
-> let and const declarations are Hoisted. 
-> these are in the temporal dead zone for the time being.
-> ""temporal dead zone"" = time since when these let variable was hoisted and till it 
    is initilize some value. time between that is known as TDZ.
-> ""ReferenceError"" = whenever JS engine tries to acess a specific varible or fun inside the memory space and u can not access it. (or varible which is inside a TDZ it gives a ReferenceError.)
-> let is little more strict then var. 
-> Redeclaration of identifier is possible in var but not in let. 
-> const is even more strict then let.                                ""const > let > var""
-> we can declare let in other place and can initilize it later. but in const this 
   is not possible. you directly get SyntexError. (code:7,8)
-> ""SyntexError"" = JS engine not even run code and reject the code before execute.
-> ""TypeError"" = you are trying to assign any other value to the const variable.
    (code:9)
-> whenever possible try to use const. if not const next let bcz let has a TDZ. keep 
   var aside.
-> to avoid TDZ related error keep variable dec. and init. on the top of code.
-> we can access var but can not access let before initilize it.
*/ 
/*       
________________________Types of Error: Syntax, Reference, and Type.

1] Uncaught ReferenceError: x is not defined at ...

This Error signifies that x has never been in the scope of the program. This literally means that x was never defined/declared and is being tried to be accesed.

2] Uncaught ReferenceError: cannot access 'a' before initialization

This Error signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a value, it is its Temporal Dead Zone. Thus, this error occurs.

3] Uncaught SyntaxError: Identifier 'a' has already been declared

This Error signifies that we are redeclaring a variable that is 'let' declared. No execution will take place.

4] Uncaught SyntaxError: Missing initializer in const declaration

This Error signifies that we haven't initialized or assigned value to a const declaration.

5]  Uncaught TypeError: Assignment to constant variable

This Error signifies that we are reassigning to a const variable.
*/


/*          //code:1
console.log(a);  //can access even before declare or initilize it. (var)
//console.log(b);  //can not access before initilize it. -> "referenceError" (let)
var a=10;
let b=100;
console.log(b);  //now can access
*/

/*         //code:2
console.log(a); //TDZ started until 'a' get value or initilize. -> "referenceError" (let)
let a = 20; //TDZ ends
var b= 100;
*/

/*        //code:3
console.log(x); // 'x' is not defined yet -> "ReferenceError"
console.log(a); // cannot access 'a' before initilization -> "ReferenceError"
console.log(b); // undefined -> "a special keyword - placeholder"
// in browser window.b=100 
let a = 10;
var b= 100;
*/

/*         //code:4

console.log("hello");
let a=10;
let a=100;
//"SyntexError = JS engine won't even execute a single line of code if it sees that redeclaration or duplication of 'let' is there in the code."
*/

/*           //code:5
console.log("hello");  
let a=10;   
var a=100;  //engine not execute any line of code and throw error that identifier 'a' has already been declared.
console.log(a);  
*/ 

/*           //code:6
console.log("hello");  //hello
var a=10;   //a=10
var a=100;   //a=update=100
console.log(a);   //print 100
*/

/*           //code:7
let a;
const b=1000;
a=10;
console.log(a); //output=10
*/


/*            //code:8
let a;
const b; //Uncaught "SyntaxError": Missing initializer in const declaration
b=1000;
a=10;
console.log(a);
*/

           //code:9
let a;
const b=100;
b=2000; //Uncaught "TypeError" : Assignment to constant variable.
a=10;
console.log(a); 