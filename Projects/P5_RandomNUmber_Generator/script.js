let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNmber)
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let playGame = true;
let prevGusses = [];
let numGuess = 1;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//this is useed to check the number lies between 1 to 100 and it should be a number
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter Validate Number");
  } else if (guess < 1) {
    alert("Please Enter Number Greater than zero");
  } else if (guess > 100) {
    alert("Please Enter Number Less Than 100");
  } else {
    prevGusses.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game is Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Gusses is Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`You Gusses is Low`);
  } else if (guess > randomNumber) {
    displayMessage(`You Gusses is High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML  += `${guess}, `;
  numGuess++;
  remaining.innerHTML  = `${11 - numGuess}`;
}


function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
