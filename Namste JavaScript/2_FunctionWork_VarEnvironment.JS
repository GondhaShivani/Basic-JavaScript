/*                            Theory
-> finctions are heart of JS.
1. in global execution contest memory space is also known as variable environment.
2. in global execution contest during 1st phase in memory space -> memory will be alocate 
   x:undefined a:{..funCode..} b:{..funCode..}
3. Now in call stack GEC is there.
4. now execution is begin.
5. in code x=1 therefore in memory -> updatation -> x:undefined to x=1.
6. a() invoke -> brand new execution contest create -> a() pushed in call stack -> in 1st phase 
   memory allocate to var and fun() -> x:undefined.
7. run code x=10 -> in memory -> updatation -> x:undefined to x=10.
8. now when in code part -> run console.log(x); -> EC will find value of x in local memory
   [local memory=short time created EC's memory part] -> and "print 10".
9. now EC a() is deleted=popedOut from call stack -> control is again in GEC a() -> a() is       executed -> therefore control moves to next b().
10. b() call -> brand new execution contest create -> pushed in call stack -> ..... same as a(). 
    -> and "print 100".
11. now control is again in GEC b() -> b() is executed -> therefore control moves to next 
    print x -> and "print 1".
    -> final output = 10 100 1
12. when whole code is execute then GEC will remove everything and poped out from call stack.

*/
var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}