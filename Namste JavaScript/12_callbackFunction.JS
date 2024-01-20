/*
1] callback functions :
- you can take a function and pass it into another function. then which function you pass it to a another function is called callback function.
- JS is synchronous single threaded language -> only do one thing at a time in a specific order.
- due to callback we can do Async things inside JS.

ex1.
setTimeout( function(){
                console.log("timer");
            } , 20000 );

function x(y) {
    console.log("x");
    y();
}

x(  function y(){
    console.log("y");
    }  );

*/

/*
2] callback function with eventlistener :

document.getElementById("ClickMe").addEventListener("click",function xyz(){
    console.log("button clicked");
});
*/

//count how many time button clicked.
var count=0;
document.getElementById("ClickMe").addEventListener("click",function xyz(){
    console.log("button clicked", ++count);
});


/*
3] remove eventListener & Garbage Collection

*/