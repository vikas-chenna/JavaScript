// fetch is also worked as XHR but fetch is powerful

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json(); // to convert string to JSON       we always received values in string when we are fetching
//   })
//   .then((data) => {
//     console.log(data);
//   });

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