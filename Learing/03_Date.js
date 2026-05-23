//Dates in Javascript
/*
when we want to current date, the output it gives in milli seconds

console.log(Date.now());
output :- 1777675746438

this is the  number which is runner from 1 jan 1970 till now 

if we want current date 

let myDate = new Date();
console.log(myDate.toLocaleString());       output --- 2/5/2026, 4:21:36 am

*/

let myDate = new Date();
console.log(myDate.toLocaleString());           // 2/5/2026, 4:25:39 am
console.log(myDate.toDateString());             // Sat May 02 2026
console.log(myDate.toLocaleDateString());       // 2/5/2026
console.log(myDate.toString());                 // Sat May 02 2026 04:25:39 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString());             // 04:25:39 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleTimeString());       // 4:25:39 am

//for date
console.log(myDate.getDate());                  // 2
console.log(myDate.getFullYear());              // 2026
console.log(myDate.getMonth()); // (may)        // 4    --> 4 not 5 because it start with 0 
console.log(myDate.getDay());                   // 6

//for time
console.log(myDate.getTime());                  // 1777676139031 --> in ms
console.log(myDate.getHours());                 // 4
console.log(myDate.getMinutes());               // 25
console.log(myDate.getSeconds());               // 39

