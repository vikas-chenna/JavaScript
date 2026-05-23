/*

there are two types of datatypes in Javascript
1. Primitive :- which send copy of their values to the memory or to assign to other variables
                (Call by Value) 
                (uses Stack Memory)

examples :-
            1. string :- single or group of character.
                         ex :- 
                                let name = "vikas chenna"; 
            
            2. number :- contains number values
                         ex :- 
                            let age = 24;
            
            3. bigInt :- contains large numbers.
                         ex :-
                            let bigNumber = 23145678954623154689n;

            
            4. symbol :- to unqiuely identify
                         ex :- 
                            let sym = Symbol('123');
            
            5. boolean :- gives true or false
                          ex :-
                            true = 1;
                            false = 0;

                         let userLoggedIn = true;
            
            6. undefined :- not assign any value
                            ex :-
                                let name;
                                  or
                                let name = undefined
            
            7. null :- indicates empty nothing in it
                        ex :-
                            let temperature = null;

2. Non-Primitive :- which send original value to the memory to store or to assign to other variables
                (Call by References)
                 (uses heap Memory)

Examples
                 1. Arrays :- collection of Different datatype
                              ex :- 
                              let caers = ["BMW","RR","Ferrari","TATA"];
                
                2. Objects :- collection of different datatypes 
                              ex :-
                              let userOne = {
                                name : "vikas chenna",
                                age : 24,
                                hobbies : "Coding"
                              }

                3. functions :- unit of code which can call any where in the program and can be reuse as much we want
                                ex:-
                                const sayHello = function(){
                                    console.log("Hello World");
                                }

*/

//  1. string ex :- 
let name = "vikas chenna"; 
            
// 2. number :- ex :- 
let age = 24;
            
//  3. bigInt :- ex :-
let bigNumber = 23145678954623154689n;

            
//  4. symbol :- ex :- 
let sym = Symbol('123');
            
// 5. boolean :-  ex :-
true = 1;
false = 0;
let userLoggedIn = true;
            
// 6. undefined :- ex :-
let name;
or
let name = undefined
            
//  7. null :- ex :-
let temperature = null;



//  1. Arrays :- ex :- 
let caers = ["BMW","RR","Ferrari","TATA"];
                
// 2. Objects :- ex :-
let userOne = {
  name : "vikas chenna",
  age : 24,
  hobbies : "Coding"
}

// 3. functions :- ex:-
const sayHello = function(){
  console.log("Hello World");
}