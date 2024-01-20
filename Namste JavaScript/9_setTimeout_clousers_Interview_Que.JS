/*                                    Theory
-> "setTimeout" : it takes this call back function and attaches a timer to it and stores it into some space and JS proceeds it just goes to the next and next line, once that timer expired it takes that function, puts it again in the call stack and runs it.
-> JS not wi8 for the setTimeout time. it runs ahead then print setTimeout fun.






*/
/*                   //code:1
function x()
{
    //1.
    var i=1;
    setTimeout(function(){ //this fun makes a clouser and has reference of i therefore whenever we call fun it already has reference of i and finds value of i and print it.
        console.log(i);
    },1000);  //1000ms=1sec
    console.log("Hello");         //hello prints first then wi8 for 1 sec and then print i.

    //2.
    var i=3; //now value is updated -> upper i value is also 3 -> this code prints 3 for 2 times first after 1 sec and second after 3 sec
    setTimeout(function(){
        console.log(i);       
    },3000);
}
x();
*/

/*                     //code:2
function x(){
var i=1;
    setTimeout(function(){ //this fun makes a clouser and has reference of i therefore whenever we call fun it already has reference of i and finds value of i and print it.
        console.log(i);
    },5000);  //1000ms=1sec
    console.log("Hello"); 
    console.log("Hello"); //first print all Hello and then after 5 sec print i.
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}
x();
*/

/*                        //code:3 printing 1 to 5 using let
function x(){

    for(let i=1;i<=5;i++) 
//var print 5 times '6' because with clouser var points to the copy of i in one location -> for loop is gone continue and continue ->whenever setTimeout time will complete last value of i will be 6 -> and print '6' 5 times.
//let points to the copy of i in different location -> whenever setTimeout time will complete let i prints different values of it as per time duration.
    {
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("Hellooo");
}
x();
*/

                            //code:4 printing 1 to 5 using var
function x(){                   
    for(var i=1;i<=5;i++) 
    {
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i); //with close fun everytime copy of i will update and print.
    }
    console.log("Hellooo");
}
x();                            