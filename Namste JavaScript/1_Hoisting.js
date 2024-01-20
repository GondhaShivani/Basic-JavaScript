// Hoisting : hoisting is a finomina in JS by which you can access variables and functions even before you have initilized it.
// if variable is not initilized and invoke then 'undefined' special value will be given to that variable automatically.
// if function is not initilized and invoke then function print itself.
// arrow function is behave like a 'variable' 'not a function'.
// Execution context gets created in two phase, so even before code execution, memory is created so in case of variable, it will be initialized as undefined while in case of function the whole function code is placed in the memory. Example:

/*          // 1)   Normal Code

//initilization
var x=7;
function getname(){
    console.log("Hello");
}

//invoking
getname(); 
console.log(x);
//output: Hello 7
*/      

/*            // 2)  invoke first

//invoking
getname();
console.log(x);

//initilization
int x=7;
function getname(){
    console.log("Hello");
}
//output: Hello Undefined
*/

/*            // 3)  invoke first & x is not initilized

//invoking
getname();
console.log(x);

//initilization
function getname(){
    console.log("Hello");
}
output: Hello X is not defined
*/

/*            // 4)  invoke function by console without initilization

//invoking
console.log(getname);

//output: print function itself -> function getname(){
                                        console.log("Hello");
                                   }
*/

            // 5)  Arrow Function
/*
The syntax of the arrow function is: 
let myFunction = (arg1, arg2, ...argN) => { statement(s) } 
Here, myFunction is the name of the function. arg1, arg2, ... argN are the function arguments.
*/
/*
//              Example 1: Arrow Function with No Argument
var greet1 = () => {
    console.log('Hello');  //only one line code can be written without curly braces.
}
//invoking
greet1();  //output:  Hello
*/

/*
//              Example 2: Arrow Function with One Argument
var greet2 = x => console.log(x);
greet2('Hello'); // Hello 
greet2();  //undefined
greet2(x);  // not defiend
*/

/*
//              Example 3: Arrow Function as an Expression
var age = 5;
var welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult'); //using ternary
welcome(); // Baby
*/

/*
//              Example 4:
//console.log(getname); //wherever in code getname is defined therefore -> output:undefined
//getname(); // error: getname is not a function //arrow fun behave like a variable.
var getname = () => {
    console.log("Hello");
}
console.log(getname); //function itself
getname(); //Hello
*/


/*           // 6) code with arrow function

//invoking
getname();
console.log(x);

//initilization
int x=7;
var getname = () => {
    console.log("Hello");
}

//output: Undefined Undefined    <- both are var and invoke before initilization
*/