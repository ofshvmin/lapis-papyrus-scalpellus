const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}
const choices = ['Lapis', 'Papyrus', 'Scalpellus']

let playerScore = null
let computerScore = null


//logic for computer's choice
function computerChooses(){
const randomIndex = Math.floor(Math.random() * choices.length);
computer.currentChoice = choices[randomIndex];
}

//declare winner functions

function computerWins(){
const computerWon = "Computer Wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
console.log(computerWon);
//   const computerWinner = document.createElement("p");
//   computerWinner.innerText = computerWon;
//   document.body.appendChild(computerWinner);
  document.querySelector("#current-winner").innerHTML = computerWon;

  computerScore++
  //console.log(computerScore)
  
  document.querySelector("#computer-score").innerHTML = convertToRoman(computerScore);

} 
function playerWins(){
const playerWon = "Player Wins! The player chose " + player.currentChoice + " and the computer chose " + computer.currentChoice;
console.log(playerWon);
// const playerWinner = document.createElement("p");
// playerWinner.innerText = playerWon;
// document.body.appendChild(playerWinner);

  document.querySelector("#current-winner").innerHTML = playerWon;

playerScore++;
  console.log(playerScore);
  document.querySelector("#player-score").innerHTML = convertToRoman(playerScore);
}
function tie(){
const tied = "Player and computer both chose " + player.currentChoice + ". It's a tie!"
console.log(tied);
// const noWinner = document.createElement("p");
// noWinner.innerText = tied;
// document.body.appendChild(noWinner);

  document.querySelector("#current-winner").innerHTML = tied;
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

convertToRoman(4);

function convertToRoman(arabicNumber) {

  const my = [];
      
      if(arabicNumber>5000) {
      console.log("that number is too high for me to count")
      }  
      
        else {
        
        const M = Math.floor(arabicNumber / 1000);
        for (i = 1; i <= M; i++) {
          my.push("M");
        }
        
        const D = Math.floor((arabicNumber % 1000) / 500)
        for (i = 1; i <= D; i++) {
          my.push("D");
          }
        
        const C = Math.floor((arabicNumber % 500) / 100) 
          for (i = 1; i <= C; i++) {
          my.push("C");  
          }
        
        const L = Math.floor((arabicNumber % 100) / 50)
        for (i = 1; i <= L; i++) {
        my.push("L");
        } 
        
        const X = Math.floor((arabicNumber % 50) / 10)
        for (i = 1; i <= X; i++) {
          my.push("X");
        }  
        
        const V = Math.floor((arabicNumber % 10) / 5)
        for( i = 1; i <= V; i++) {
          my.push("V");
        }  
        
        const I = (arabicNumber % 5)
        for(i = 1; i <= I; i++) {
          my.push("I");
        }
      
      // up to this point we add all numerals based on remainder of number / next incrementatlly larger numeral.  Still need logic to replace long strings of repetitive numerals with proper convention, ex. MCM instead of MDCCCC
      
      for(i = 0;i < my.length; i++) {
        
        replaceFour(my,i,"I","V");
          replaceFour(my,i,"X","L");
            replaceFour(my,i,"C","D");
       
          replaceFive(my,i,"V","I","X");
         replaceFive(my,i,"L","X","C");
       replaceFive(my,i,"D","C","M");
          
      }
      
      function replaceFour(arr,i,a,b) {
        if((arr[i]===a)&&(arr[i+1]===a)&&(arr[i+2]===a)&&(arr[i+3]===a)) {
          arr[i+1]=b;
          arr[i+2]="";
          arr[i+3]="";
        }
       }
      
      function replaceFive(arr,i,a,b,c){
        if((arr[i]===a) && (arr[i+1]===b) && (arr[i+2]===b) && (arr[i+3]===b) && (arr[i+4]===b)) {
          arr[i] = b;
          arr[i+1] = c;
          arr[i+2] = "";
          arr[i+3] = "";
          arr[i+4] = "";
        }
      }
  }

  return my.join("")

  // let romanNumber = my.join("")

  // console.log(romanNumber)
  }
  
  