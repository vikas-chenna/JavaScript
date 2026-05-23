//Loops in Javascript

/**
 * there are 6 types of loops in javascript in that some are specially design for arrays and obejcts
 * 1. For Loops
 * 2. While Loops
 * 3. Do-While Loops
 * 4. ForEach
 * 5. ForOF
 * 6. ForIN
 */

for (let index = 0; index <= 10; index++) {
  //  console.log(` print values using FOR LOOP ${index}`);
}

let a = 1;

while (a <= 10) {
    //console.log(` print values using FOR LOOP ${a}`);
    a++;
}

let c = 1;

do{
    //console.log(` print values using DO While LOOP ${c}`);
    c++;
}while(c < 10)

// here we are discussing break and continue keyword
// break is used to stop the flow or execution of the program when condition meet
//continue is used to skip that iteration and continue the remaining portion of the code

for(let i =1;i<=10;i++){
    if(i==5){
        console.log("5 is detected");
        break;
    }
    //console.log(i);
    
}

for(let i =1;i<=10;i++){
    if(i==5){
        console.log("5 is detected");
        continue;
    }
    console.log(i);
    
}