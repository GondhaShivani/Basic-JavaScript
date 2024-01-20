/*

1] SetTimeOut :

- every time settimeout does not wi8 for given seconds if given 5000ms then function might  be execute after 5 or 7 or 10 sec later also.
- it is depend on ""call stack"".

------------------------concurrency model in JavaScript---------------------------------

console.log("start");

setTimeout(function cb() {
    console.log("CallBack Called");
}, 5000);

console.log("end");

//million line of code... (take time for 10 sec)

- output : start
- fun cb registered in web API environment.
- output : start
           end
- miilion line of code is running, meanwhile cb() is ready to execute after its 5 seconds. so callback fun is pushed in the callback queue, event loop check weather call stack is empty or not but till 10 sec GEC is there for executing million line of code so cb() is waiting for 10 sec.
- when GEC is poped out then event loop imediatly takes callback function into the call stack and execute.
- output : start
           end
           (output of million line code)
           CallBack Called

- so timeout have time of executing 5 sec but when call stack is not empty cb fun have to wi8 for execution.
*/

/*
//ex1.
console.log("start");

setTimeout(function cb() {
    console.log("CallBack Called");
}, 3000);

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 1000){
    endDate = new Date().getTime();
}

console.log("end");
console.log("now after 10 sec ...");
*/

/*
---------------------------single threaded JS---------------------------

- JS is a synchronous single threaded language so there is only one call stack everything is waiting for call stack for execution one by one.
- it makes the JS interpreted language as faster.
- JS not wi8 for anything.

*/

/*
-------------------------------setTimeout(0)---------------------------

ex2 == ex3

//ex2.
console.log("start");

setTimeout(function cb() {
    console.log("CallBack Called");
}, 0);

console.log("end");

output  :   start
            end
            callback called
*/

console.log("start");

function cb() {
    console.log("CallBack Called");
}
setTimeout(cb, 0); 

console.log("end");

//cb fun called when whole code is execute.

/*
we need concurrency model in JavaScript bcz JS is synchronous single threaded language with the help of this model we can do asynchronous operations inside the single threaded language.
*/