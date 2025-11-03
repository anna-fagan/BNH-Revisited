// Setting null var for results of comparison
let result = null;

// Set up null variable for choice
let choice = null;

// Set up constants to make a new button
const buttonDiv = document.getElementById('play-again');
const createButton = document.createElement('button');

// create a function that re hides the divs and clears the user choice
let playAgain = () =>{
  outputDiv.style.display = 'none';
  playAgainDiv.style.display = 'none';
  choice = null;
  result = null;
  playCount++;
}

// Assign onclick value of the createButton variable to the playAgain function
createButton.textContent('Play Again?');
createButton.onclick(playAgain);

// Set up Functions for each choice
function userBear() {
  return choice = 'bear';
}

function userNinja() {
  return choice = 'ninja';
}

function userHunter(){
  return choice = 'hunter';
}

// Set up a variable for times you have run this while loop
let playCount = 1;

// Set up a loop to run once a user picks a choice
while (choice != null){
  // Make an array to get the computer choices
  const cChoices= ['bear','ninja','hunter'];

  // Generate a random number to put into the array
  randomNumber= Math.floor(Math.random()*3);

  // Set cChoice to name in array that corresponds to int
  compChoice= cChoices[randomNumber];

  // Creating logic where each case is a user choice and then compares that to the computer choice
  switch (choice){
    case 'bear':
      if (compChoice ==='ninja'){
        result='win';
      } else if (compChoice ==='hunter'){
        result ='lose';
      } else{
        result ='tie';
      }
      break;
    case 'ninja':
      if (compChoice ==='ninja'){
        result ='tie';
      } else if (compChoice ==='hunter'){
        result ='win';
      } else{
        result ='lose';
      }
      break;
    case 'hunter':
      if (compChoice ==='ninja'){
        result='lose';
      } else if (compChoice ==='hunter'){
        result='tie';
      } else{
        result='win';
      }
      break;
  }
  // Make a variable to display div for results
  let outputDiv = document.getElementById('output');
  if (outputDiv.display === 'none'){
    outputDiv.style.display = 'inline-block';
  }
  // Put results inside the div
  let achoice = `${username}!, You picked ${choice}! The computer picked ${compChoice}!`;
  document.getElementById("result").innerHTML = `${achoice} You${result}!`;

  // Make a variable and display play again
  let playAgainDiv = document.getElementById('play-again');
  if (playAgainDiv.display === 'none'){
    playAgainDiv.style.display = 'inline-block'
  }

  // Create button inside the play again div
  buttonDiv.appendChild(createButton);

}