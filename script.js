// Pseudocode: Rock Paper Scissors //
/*
    1. Create the HTML + CSS (done)
    2. Ask the user for a value (done)
    3. Have the computer return a value (done)
    4. Round Logic (done)
    5. Finishing touches (done)
    6. Push it all to GitHub and submit (in progress)
*/

// Number Assigner
let rock = 1;
let paper = 2;
let scissors = 3;



function rpsGame(){

// Game Logic

function playRound(humanResponse, computerResponse){
   let outcome1 = (humanResponse === 1 && computerResponse === 3)
   let outcome2 = (humanResponse === 1 && computerResponse === 2)
   let outcome3 = (humanResponse === 2 && computerResponse === 3)
   let outcome4 = (humanResponse === 2 && computerResponse === 1)
   let outcome5 = (humanResponse === 3 && computerResponse === 2)
   let outcome6 = (humanResponse === 3 && computerResponse === 1)
   
   let humanScore = 0;
   let computerScore = 0;
   
   if (humanResponse === computerResponse){
      console.log(`Tie game!`)
   } else if (outcome6 || outcome2 || outcome3){
      console.log(`Computer wins!`)
   } else if (outcome1 || outcome4 || outcome5){
      console.log(`Human wins!`)
   } else {
      console.log(`Nobody... wins?`)
   }
   }

// Human Response
let prompter = prompt("Throw your hand now! Rock, Paper, or Scissors!");

if (prompter === "rock" || prompter === "Rock" || prompter === "ROCK"){
   console.log("Rock thrown! (Human)");
   humanResponse = 1;
} else if (prompter === "paper" || prompter === "Paper" || prompter === "PAPER"){
   console.log("Paper thrown! (Human)")
   humanResponse = 2;
} else if (prompter === "scissors" || prompter === "Scissors" || prompter === "SCISSORS"){
   console.log("Scissors thrown! (Human)")
   humanResponse = 3;
} else {
   console.log("Error encountered, check your spelling!")
}

// Computer Response

let computerResponse = Math.trunc(Math.random() * 3) + 1;

if (computerResponse === 1){
   console.log("Rock thrown! (Computer)")
} else if (computerResponse === 2){
   console.log("Paper thrown! (Computer)")
} else if (computerResponse === 3){
   console.log("Scissors thrown! (Computer)")
} else {
   console.log("Computer error!")
}

const roundStorage = playRound(humanResponse, computerResponse);
}

rpsGame()
rpsGame()
rpsGame()
rpsGame()
rpsGame()






















