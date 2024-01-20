/*
-Call Stack maintains the order of execution of execution contexts. 
It is also known as Program Stack, Control Stack, Runtime stack, Machine Stack, Execution context stack.

- Note: Call stack will execeute any execeution context which enters it. Time, tide and JS waits for none. TLDR; Call stack has no timer.

- Browser has -> JS Engine which has -> Call Stack which has -> Global execution context, local execution context etc.
But browser has many other superpowers - Local storage space, Timer, place to enter URL, Bluetooth access, Geolocation access and so on.
Now JS needs some way to connect the callstack with all these superpowers. This is done using Web APIs.

- None of the below are part of Javascript! These are extra superpowers that browser has. Browser gives access to JS callstack to use these powers.

- setTimeout() : Timer function
- DOM APIs : eg.Document.xxxx ; Used to access HTML DOM tree. (Document Object Manipulation)
- fetch() : Used to make connection with external servers eg. Netflix servers etc.
We get all these inside call stack through global object ie. window

- Use window keyword like : window.setTimeout(), window.localstorage, window.console.log() to log something inside console.
As window is global obj, and all the above functions are present in global object, we don't explicity write window but it is implied.
*/

/*
-----------------------------------1] callback example :------------------------------------------

- whenever call back function is there in the JS code then first it registerd in the web API Environment.
- callback function is registered in the web API Environment -> as soon as when the timer 
(setTimeOut) expire -> the call back function is pushed inside the callback queue from web API Environment -> event loop checks weather if anything in the callback queue -> event loop finds the callback method and pushed inside the call stack -> and call stack quickly execute the callback function.

call back queue is also known as task queue
*/

/*
//ex1.
console.log("start");

setTimeout(function cb() {
    console.log("CallBack Called");
}, 3000);

console.log("end");
*/

/*
//ex2.
console.log("start");

var count=0;
document.getElementById("ClickMe")
.addEventListener("click", function cb(){
    console.log("button clicked", ++count, "time");
});

console.log("end");
*/

/*
----------------------------------------2] Event Loop :---------------------------------------

- work of event loop :
continous monitering on call stack and callback queue.
- if callstack is empty and event loop shows that callback function is there in callback queue then event loop imediatly push that function into the callstack.

??? why do we need of callback queue ???

- if user click btn for many times like 5 times then 5 callback function call are waiting in the callback queue and if call stack is empty event loop push call back fun from queue one by one in call stack and executes it.

*/

/*
------------------------------------------3] Fetch ------------------------------------------

- fetch is a web API which is used to make network calls.
- fetch basically goes and request API call.
- fetch fun returns a promise.
- we have to pass a call back fun and when promise is resolved that function will execute.
*/

//ex3.

console.log("start");

setTimeout(function cbt() {
    console.log("Timer call back");
}, 5000);

fetch("https://api.netflix.com").then(function cbf(){
    console.log("fetch call back");
});

console.log("end");

/*
----------------------------------------4] Micro task queue :--------------------------------------

- microtask queue is similar as the callback queue.
- """"""""""but Micro task queue have higher priority then callback queue.""""""""
- ex3 output : start
- in ex3 there is two callback function cbt and cbf is there registered in the web API environment.
cbt is 1st registered and cbf is then after.
- now if cbf get response from server and ready to execute before -> cbt completes timer -> then cbf is pushed into the Micro task queue.
- now in call stack GEC is there and that execute millions line of code -> cbf is in the Micro task queue -> at that time if timer is done their seconds and cbt is ready to execute then cbt is goes into the callback queue.

-> in call stack - GEC
-> in Micro task queue - cbf
-> in callback queue - cbt

- when code is run till last time and there is nothing to execute GEC will get poped from the call stack. event loop was continously check wether call stack empty or not.
- ex3 output : start
               end

now call stack is empty therefore event loop shedule the call back function one by one to execute.
- Micro task queue have higher priority so cbf is 1st pushed in the stack and execute.
- ex3 output : start
               end
               fetch call back

- now cbf poped out from call stack and micro task queue.
- again event loop check call stack is empty and there a function cbt is waiting for execute in the call back queue.
- cbt is pushed into the stack 
- ex3 output :  start
                end
                fetch call back
                Timer call back
*/

/*

??? what can come in the micro task queue ???
- all the callback function which is come through promises & mutation observer can come into the microtask queue.
- callback fun which is from setTimeOut, DOM API is come in the call back queue.

- if there is 3 task in microtask queue and 1 task in call back queue is waiting for execute.
 then call back function from microstask queue is execute 1st.
 and then call back function from callback queue is execute.

 */

 /*
 ---------------------------------------4] Starvation :--------------------------------------

 - there is 3 call back function in micro task queue.
 - there is 1 call back function in call back queue.
 - one of the micro task function makes a other micro task function from itself.
 - that one also makes a micro task function from itself.
 - like wise there is much more micro task functions to execute -> and call back queue function never get the chance to execute.
 - this situation is possible and that is called starvation.
*/