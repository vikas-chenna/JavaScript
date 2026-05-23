// promises in js 
//  it complete a task for a given period
// means first it is located in stack memory then it goes to prority queue then it will come when the time is over
// promise is an object in js

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("promise one is created successfully");
        resolve()   // it is used to connect 'then'
    },1000)
})

promiseOne.then(()=>{
    console.log("promised one consumed");
    
})


// another way of creating Promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promised two created");
        resolve();
    },1000)
}).then(()=>{
    console.log("Promised two consumed");
    
})

// how to transfer data from promise to then

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Promised Three Created and data passed sucessfully");
        // reslove([1,2,3,4,5])
        resolve({userName:"vikas chenna",age:23})
        
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// how to get any single value like userName


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({userName:"vikasChenna",age:23})
        }else{
            reject("We Got an error for PROMISE 4")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName;
}).then((userName)=>{
    console.log(userName);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("Your Promise Is Resolved or Rejected");
    
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(error){
            reject("WE GOT ERROR AGAIN FROM PROMISE 5");
            
        }else{
            resolve({userName:"Vikas",age:23})
        }
    },1000)
})

async function consumedPromisedFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumedPromisedFive()


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("ERROR ",error);
        
    }
}

getAllUsers()