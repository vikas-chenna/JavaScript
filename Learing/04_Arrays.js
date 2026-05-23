//Arrys in JavaScript


/*
arrays are used to store different datatypes in javascript but in some others languages arrays can store only same datatypes like c,c++,.Net, .etc

we can declare arrays in different ways 

const arr = ["hello",100,true];
const arr1 = new Array(1,2,3,4,50);

methods

arr.push(10)        it adds elements at the end
arr.pop()           it removes elements at the end

output :- [ 50, 'hello', 100, true, 10 ]

arr.unshift(50)        it adds elements at the in Front
arr.shift()           it removes elements at the Front


output :- [ 1, 2, 3, 4, 50 ]
*/




const arr = ["hello",100];
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,50);

//methods

arr.push(10)        
arr.push(120)        
arr.pop()         

arr.unshift(50)        
arr.unshift(150)        
arr.shift()           

console.log(arr);
console.log(arr1);


//combine two arrays and brings output in one array using spread operator (...arrayName)

// arr.push(arr1);

// console.log(arr);

const newarray = (arr.arr1);
console.log(newarray);


const spreadarr = [...arr,...arr1]
console.log(spreadarr);


// const arrInArr = [1,2,3,[4,5],6,7,[8,9],10];

// const printarrInArr = arrInArr.flat(Infinity);

// console.log(printarrInArr);


console.log(Array.isArray("Vikas"));        //true or false     output :-  false
console.log(Array.from("Vikas chenna"));

console.log(Array.from({name : "vikas"}));      //output [] empty object because we have to define what should be convert to array like keys or values

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));


// Different between slice and splice
//slice doesnot change original array but
//splice modifed original array

let arrslice = [1,2,4,3,5];
let arrSplice = [10,20,40,30,50];


console.log("Slice original array ",arrslice);
console.log("Slice ",arrslice.slice(0,2));
console.log("Slice modifed array ",arrslice);

console.log("Splice original array ",arrSplice);
console.log("Splice ",arrSplice.splice(0,2));
console.log("Splice modified array ",arrSplice);
