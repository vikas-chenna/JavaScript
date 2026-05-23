// how to create our own property

let name = "Vikas     "; // for this i want to remove extra spaces and return exact length

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`Your true length is ${this.trim().length}`);
};
name.trueLength();

'hitesh'.trueLength()
'Vikas Chenna      '.trueLength()


/*
OUTPUT

Vikas     
Your true length is 5
hitesh
Your true length is 6
Vikas Chenna      
Your true length is 12

*/

class myClass{
    constructor(userName,password){
        this.userName = userName
        this.password = password
    }

     encryptPassword() {
        return `${this.password}a1b2`   
    }
}

let chai = new myClass("Vikas_Chenna","123")
console.log(chai.encryptPassword());
