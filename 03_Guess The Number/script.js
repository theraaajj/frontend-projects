// const randomNmbr = parseInt(Math.random*100 + 1)
// const submit = document.querySelector('#subt')
// const userInput = document.querySelector('#guessField')
// const guessSlot = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('.lowOrHi')
// const startOver = document.querySelector('.resultParas')
// // this startOver is when all attempts are finished, then nothing
// // is to be shown in previous guesses, or remaining. just show start over

// const p = document.createElement('p')

// let prevGuess = [];   // starts the previous guesses in the form of an array.
// let numGuess = 1;     // when it completes 10, we'll disable the submit button.

// let playGame = true   // hmesa ek game me aisa variable rehta hai, jo ki true rhega tab hi chalega game
// // like tolken khtm, ya moves khtm toh thodi chalana hai phir game aage! that's why.

// if (playGame){
//     submit.addEventListener('click' , function(e){
//         e.preventDefault()
//         const guess = parseInt(userInput.value)
//         validateGuess(guess)
//     })
// }

// // jo number derha wo kya req parameters me fall karta hai?
// // ye function toh har project me hota hi hai
// function validateGuess (guess) { 
//     if(isNaN(guess)){
//         alert('Please enter a valid number')
//     } else if(guess<1){
//         alert('Please enter a number more than 1')
//     } else if(guess>100){
//         alert('Please enter a number less than 100')
//     } else{
//         prevGuess.push(guess)
//         if(numGuess === 11){
//             displayGuess (guess)
//             displayMsg (`Game Over. Random number was ${randomNmbr}`)
//             endGame()
//         } else {
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }

// // validateGuess bas validate karta hai, han ya na
// // but we need this checkGuess to print a message!
// function checkGuess (guess) {
//     if(guess === randomNmbr){
//         displayMsg(`You guessed it right`)
//         endGame()
//     } else if (guess < randomNmbr){
//         displayMsg(`Number is tooo low`)
//     }
//      else if(guess > randomNmbr){
//         displayMsg(`Number is tooo high`)
//     }
// }


// // value userInput ki khali bhi toh karni hai, aur guess wala array update karke
// function displayGuess (guess){
//     userInput.value = ''
//     guessSlot.innerHTML += `${guess+', '}`   //update nhi karega, push karega (+=)
//     numGuess++;
//     remaining.innerHTML = `${11 - numGuess}`
// }
 
// // sidhe DOM se contact karega
// function displayMsg (message) {
//     lowOrHi.innerHTML = `<h2>${message}</h2>`
// }

// function endGame(){

    
// }

// function newGame(){

// }



let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
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

