/*                  3_ShortestJSPrg_window_This_Keyword
-> shortest JS program = empty File
-> GEC is create even though file is empty.
-> this points to the window object
-> window object = a global object which is created along with the GEC.
-> whenever any JS program is run = global object created = GEC is created = and along this GEC a 
   this variable is created.
-> all JS engine has responsibility to create global object (even though JS file is Empty)
-> global object -> in case of browser -> a window object.
-> at global level or at base level -> this == window -> true
-> global space = any code that you write in JS which is not inside a function.


*/
var x=2;
console.log("hello"); 
var a=10; //this is in global space
function a() //this is in global space
{
   var x=10; //this is not in global space
}
console.log(window.a); //ouutput=10
console.log(a); //ouutput=10
console.log(this.a); //ouutput=10
console.log(x); //ouutput=x is not defined -> bcz whenever we don't write anything in front of x it tries to find x in global space where's it is not defined

//this variables and function get attach with global object. it was window.