const player = {
    currentChoice: null
}
const computer = {
    currentChoice: null
}
const choices = ['Lapis', 'Papyrus', 'Scalpellus']

//logic for computer's choice
function computerChooses(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

//declare winner functions
function computerWins(){
  const computerWon = "Computer Wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
  console.log(computerWon);
  const computerWinner = document.createElement("p");
  computerWinner.innerText = computerWon;
  document.body.appendChild(computerWinner);
} 
function playerWins(){
  const playerWon = "Player Wins! The player chose " + player.currentChoice + " and the computer chose " + computer.currentChoice;
  console.log(playerWon);
  const playerWinner = document.createElement("p");
  playerWinner.innerText = playerWon;
  document.body.appendChild(playerWinner);
}
function tie(){
  const tied = "Player and computer both chose " + player.currentChoice + ". It's a tie!"
  console.log(tied);
  const noWinner = document.createElement("p");
  noWinner.innerText = tied;
  document.body.appendChild(noWinner);
}

//evaluate who won
function compareChoices(){
  computerChooses();
  if (player.currentChoice === computer.currentChoice){
    tie();
  }
  else if (player.currentChoice === choices[0]){
    if(computer.currentChoice === choices[1]){
      computerWins();
    }
    else {
      playerWins();
    }
  }
  else if (player.currentChoice === choices[1]){
    if(computer.currentChoice === choices[2]){
      computerWins();
    }
    else {
      playerWins();
    }
  }
  else if (player.currentChoice === choices[2]){
    if(computer.currentChoice === choices[0]){
      computerWins();
    }
    else {
      playerWins();
    }
  }
}

//player.currentChoice = choices[0];
//compareChoices();

//const winnerResults = document.createElement("p");
//winnerResults.innerText = winnerVariableOutput;
//document.body.appendChild(winnerResults);

function chooseRock(){
  player.currentChoice = choices[0];
  compareChoices();
}

function choosePaper(){
  player.currentChoice = choices[1];
  compareChoices();
}

function chooseScissors(){
  player.currentChoice = choices[2];
  compareChoices();
}

document.querySelector("#rock").onclick = chooseRock;
document.querySelector("#paper").onclick = choosePaper;
document.querySelector("#scissors").onclick = chooseScissors;