const clock = document.querySelector("#clock")

setInterval(function(){
    let date = new Date();
    const time = date.toLocaleTimeString();
    // console.log(time);
    clock.innerHTML = `<span>${time}</span>`
},1000)