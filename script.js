// Pseudocode: Rock Paper Scissors //
/*
    1. Create the HTML + CSS (done)
    2. Ask the user for a value (done)
    3. Have the computer return a value (done)
    4. Round Logic (done)
    5. Finishing touches (done)
    6. Push it all to GitHub and submit (done)

// Update Time //
   7. Create three buttons that call the rpsGame function ()
   8. Store the scores and declare a winner ()
   9. Display the results in the box ()
   10. Merge the branches and push to GitHub ()
*/

// Number Assigner
const rock = 1;
const paper = 2;
const scissors = 3;

// Game Starter
const rBTN = document.getElementsByClassName("one");
const pBTN = document.getElementsByClassName("two");
const sBTN = document.getElementsByClassName("three");

const teller = document.getElementsByClassName("teller");
const scorer = document.getElementsByClassName("scorer");

function startRoundR(){
   rpsGame ("rock");
}
function startRoundP(){
   rpsGame ("paper");
}
function startRoundS(){
   rpsGame ("scissors");
}


function rpsGame(prompter){

// Game Logic

function playRound(humanResponse, computerResponse){
   let outcome1 = (humanResponse === rock && computerResponse === scissors)
   let outcome2 = (humanResponse === "rock" && computerResponse === paper)
   let outcome3 = (humanResponse === "paper" && computerResponse === scissors)
   let outcome4 = (humanResponse === "paper" && computerResponse === "rock")
   let outcome5 = (humanResponse === "scissors" && computerResponse === "paper")
   let outcome6 = (humanResponse === "scissors" && computerResponse === "rock")
   let outcome7 = (humanResponse === "rock" && computerResponse === "rock")
   let outcome8 = (humanResponse === "paper" && computerResponse === "paper")
   let outcome9 = (humanResponse === "scissors" && computerResponse === "scissors")
   
   let humanScore = 0;
   let computerScore = 0;
   
   if (humanResponse === computerResponse){
      console.log(`${humanKeyword} vs. ${computerKeyword}! Tie game!`)
   } else if (outcome6 || outcome2 || outcome3){
      console.log(`${computerKeyword} beats ${humanKeyword}! Computer wins!`)
   } else if (outcome1 || outcome4 || outcome5){
      console.log(`${humanKeyword} beats ${computerKeyword}! Human wins!`)
   } else {
      console.log(`Nobody... wins?`)
   }
   }

// Human Response

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
























