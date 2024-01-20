/*

------------------------1] JavaScript runtime Environment------------------------

show - image
- JavaScript runtime Environment have all the things that needs to run JavaScript Code.
- for run any JS code we need JS engine.

JavaScript runtime Environment have :-
1. JS engine
2. set of web APIs - for connect to the outer environment
3. event loop
4. callback queue
5. microtask queue

- JavaScript runtime Environment is not possible without the JS engine.
- JS engine is the heart of the JavaScript runtime Environment.
- every browser have JavaScript runtime Environment.

-----------------------------2] JavaScript Engine-----------------------------------

show - image
- all different browser have their own different JS engine.
1. microsoft edge ->> Chakra
2. Mozilla firefox ->> SpiderMonkey
3. google chrome, Node JS, deno ->> V8

you can create your own JS engine -> it must follows the ECMAScript language standard.

first SavaScript engine developed by creater of JS.

-------------------------3] Myths about JavaScript Engine------------------------------

JS engine is not a machine.
JS engine takes code which is written in the JS and convert it inot the machien level language.
JS engine is a normal programme.

------------------------4] architecture JavaScript Engine--------------------

JS engine takes code which is written by the human being.
code->> 1. parsing
        2. compilation
        3. execution

1. parsing :-
- it converts code into the tokens.
ex.  let a = 7;   [ let, a, = ->  tokens ]
- syntax parser - takes the code and convert it inot the AST (abstarct syntax tree).

2. compilation :-
- AST send to the compilation phase.
JIT Compilation ::== (just in time)
compiler - first compile the code and form a optimize code and then that code will execute. 
         - more efficincy
interpreter - takes the code and start executing line by line.
            - fast

JS is a compiled and interpreted language.
it is depend on the JS engine that what give output compiler or interpreter.
when JS made it is interpreted language. but now a time it is both.

interpreter + compilation == just in time compilation. (use both to execute the code)

3. execution :-
- interpreter convert AST to byte code. and meanwhile it takes help of compiler for optimise the code.

in some JS engine -> AOT - ahead of time compilation -> compiler takes code which will execute later and try to optimise as much it can.

execution is not possible without two major components of JS engine.
1. memory heap - all variable and function assign memory
2. call stack

Garbage Collector :--
it tries to free up memory spaces whenever it possible.
it uses the mark & sweep algorithm. 

-------------------------------4] Fastest JavaScript Engine----------------------------------

google V8 JS engine
V8 has interpreter name ignition.
and has compiler name turboFan optimising compiler.
garbage collector - orinoco
JS_V8_engine -->> image


*/