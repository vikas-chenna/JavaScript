//objects in javascript

/**
 * we can declare two types of objects 
 * 1) singlton :- which means when we create object using new keyword 
 *  
 *              ex:-
 *                  const obj = new Object();
                    obj.id = 101;
                    obj.name = "vikas";
                    obj.email = "vikas@gmail.com"

                    console.log(obj);

 * 2) literals :- means without using it
 *
 *              ex :-
 *                  const obj1 = {
                    id: 102,
                    name: "chenna",   
                    email: "chenna@gmail.com",
                };
                console.log(obj1); 
 */


  
const obj = new Object();
obj.id = 101;
obj.name = "vikas";
obj.email = "vikas@gmail.com";

//console.log(obj);

const obj1 = {
  id: 102,
  name: "chenna",
  email: "chenna@gmail.com",
};
//console.log(obj1);

const mySym = Symbol("key1");

const user = {
  id: 1,
  name: "vikas",
  "full name": "vikas chenna",
  [mySym]: "myKey1",
  email: "vikasChenna@gmail.com",
  isLoggedIn: true,
  workingDays: ["Monday", "Wednesday", "Thursday"],
};

// console.log(user);
// console.log(user.id);
// console.log(user.name);
// console.log(user["full name"]);
// console.log(user[mySym]);

//freeze :- it is used to stop overrideing changes in object it freezes the object after it inilization nothing willl overWrite

//before freeze
user.email = "vikas@google.com";
// console.log(user["email"]);

//after freeze
// Object.freeze(user);
user.email = "vikas@Facebook.com";

// console.log(user["email"]);

//creating function with and without passing object elements in fun

user.greet = function () {
  console.log("hello World");
};



user.greet1 = function () {
  console.log(`Hello ${this["full name"]}, Have as Great Day`);
};

//this is a keyword points to the current object 

console.log(user.greet());
console.log(user.greet1());




const newUser = {
    name : {
        "full Name" : {
            nikeName : "vicky"
        }
    }
}

console.log(newUser.name);
console.log(newUser.name["full Name"]);
console.log(newUser.name["full Name"].nikeName);


//combine two or more objects 


const scoreObj1 = {1 : "a", 2 : "b"} 
const scoreObj2 = {3 : "c", 4 : "d"} 
const scoreObj3 = {5 : "e", 6 : "f"} 


// const obj = {scoreObj1,scoreObj2,scoreObj3}
const obj = Object.assign({},scoreObj1,scoreObj2,scoreObj3)
console.log(obj);

const spreadObj = {...scoreObj1,...scoreObj2,...scoreObj3}
console.log(spreadObj);



const myUser = {
    name :"vikas chenna",
    id : 123,
    email : "vikaschenna@gmail.com",
    myWorkPlace : "surat"
}
console.log(Object.keys(myUser));
console.log(Object.values(myUser));
console.log(Object.entries(myUser));



console.log(myUser.myWorkPlace);
//to avoid this much write instead of this write below
const {myWorkPlace} = myUser
console.log(myWorkPlace);

const {myWorkPlace : mwp} = myUser
console.log(mwp);
