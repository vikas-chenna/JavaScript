//for of and for in loops in js
// for OF is used for arrays

let myArray = ["Hornet","Shine","unicorn","Shine SP125","Harely davidson",""]

for (const element of myArray) {
//    console.log(element);
    
}


let myName = "Vikas Chenna"

for (const element of myName) {
    if(element == " "){
        continue;
    }
    console.log(element);
    
}

let myObj = {
    IN : "INDIA",
    USA : "United State of America",
    IT : "ITALY"
}

for (const key in myObj) {
    console.log(`shortName : ${key} and Full Name ${myObj[key]}`);  
}
