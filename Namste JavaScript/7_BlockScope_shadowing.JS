/*
-> let and const are block scoped. var is global scoped.
-> "block" = is defined by curly braces { }.
-> we group multiple statements together in a block so that we can use it where JS expact one statement. 
-> "Block Scope" = what all variables and functions we can access inside the block. (code:2)
-> block scope also follows lexical scope.
-> "Shadowing" = if we have same named variable outside the block so insider variable shadows the outsider variable. (code:3)
-> "script space" = where let and const were hoisted and put in a seprate memory space
-> "illegal shadowing" = you can shadow let using let inside but cannot shadow let using var.
-> "lexical scope" = each and every block have lexical scope. and follows block chain patterns it called lexical block chain patterns.
*/


/*               //code:1 = block code
{
    //compound statement
    var a = 10;
    console.log(a);
}
if(true)
{
    //compound statement
    var a = 100;
    console.log(a);
}
*/

/*                //code:2 = block Scope
{
    var a=10;
    let b=20;
    const c=30; 
    //var is in global space and let & const are in block scope.
    //you can not access let & const outside the block. bcz its block scoped.
    //but you can access var outside the block bcz it is in global scope.
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
} //from this line there is no block scope therefore JS engine finds everthing in global scope.
console.log(a);  //10
console.log(b);  //ReferenceError: b is not defined
console.log(c); //ReferenceError: c is not defined
*/


/*              //code:3 = Shadowing (var)
var a=100;
console.log(`outsider a = ${a}`); 
{
    var a=10;//this var a shadowed the outside var. now inside and even for outside a is updated to 10.
    //whenever insider-var(block-var) have another value then that var shadowing the outsider-var(global-var) therefore now value is updated by insider-var even for outsider-var(global-var).
    let b=20;
    const c=30; 
    
    console.log(`insider a = ${a}`); //10
    console.log(`b = ${b}`); //20
    console.log(`c = ${c}`); //30
} 
console.log(`now outsider a = ${a}`);  //10
*/

/*                 //code:4 = Shadowing (let)
let b=200;
console.log(b); //200 //this b has another scope. //it is in the script which is not in the block. 
{
    var a=10;
    let b=20;
    const c=30; 
    
    console.log(a); //10
    console.log(b); //20  //this b has block scope.
    console.log(c); //30
} 
console.log(b);  //200 //this b has script scope.
*/

/*                  //code:5 = Shadowing (const)
const c=300;
console.log(c); //300 //this c has another scope. //it is in the script which is not in the block. 
{
    var a=10;
    let b=20;
    const c=30; 
    
    console.log(a); //10
    console.log(b); //20  
    console.log(c); //30 //this c has block scope.
} 
console.log(c);  //300 //this c has script scope.
*/

/*                 //code:6 = Shadowing (const) in function body
const c=100;
function x(){
    const c=20;
    console.log(`inside function body c = ${c}`);
}
x();
console.log(`outside function body c = ${c}`);
*/

/*               //code:7 = illegal shadowing
let a=10;
{
    var a=90;   //cannot redeclared block-scope variable.
    //SyntaxError: Identifier 'a' has already been declared
}
*/ 

/*              //code:8 = lexical scope
console.log(`const`);
const a=10;
{
    const a=20;
    {
        const a=30;
        console.log(a); //30
    }
    console.log(a); //20
}
console.log(a); //10
console.log(`let`);
let b=10;
{
    let b=20;  
    {
        let b=30;
        console.log(b); //30
    }
    console.log(b); //20
}
console.log(b); //10
console.log(`var`);
var c=10;
{
    var c=20; 
    {
        var c=30;
        console.log(c); //30
    }
    console.log(c); //30 //shadowing
}
console.log(c); //30
*/
