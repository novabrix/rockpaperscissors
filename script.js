// Pseudocode: Rock Paper Scissors //
/*
    1. Create the HTML + CSS (done)
    2. Ask the user for a value (done)
    3. Have the computer return a value (done)
    4. Round Logic (done)
    5. Finishing touches (done)
    6. Push it all to GitHub and submit (done)

// Update Time //
   7. Create three buttons that call the rpsGame function (done)
   8. Store the scores and declare a winner ()
   9. Display the results in the box (done)
   10. Merge the branches and push to GitHub ()
*/

// Number Assigner
const rock = 1;
const paper = 2;
const scissors = 3;

// Game Starter
const rBTN = document.querySelector("one");
const pBTN = document.querySelector("two");
const sBTN = document.querySelector("three");

const teller = document.querySelector(".teller");
const scorer = document.querySelector(".scorer");

function startRoundR() {
  rpsGame("rock");
}
function startRoundP() {
  rpsGame("paper");
}
function startRoundS() {
  rpsGame("scissors");
}

function rpsGame(prompter) {
  // Game Logic

  function playRound(humanResponse, computerResponse) {
    let outcome1 = humanResponse === rock && computerResponse === scissors;
    let outcome2 = humanResponse === rock && computerResponse === paper;
    let outcome3 = humanResponse === paper && computerResponse === scissors;
    let outcome4 = humanResponse === paper && computerResponse === rock;
    let outcome5 = humanResponse === scissors && computerResponse === paper;
    let outcome6 = humanResponse === scissors && computerResponse === rock;

    let humanScore = 0;
    let computerScore = 0;

    if (humanResponse === computerResponse) {
      document.querySelector(
        ".scorer"
      ).textContent = `Tie game (${humanThrow} vs. ${computerThrow})!`;
    } else if (outcome6 || outcome2 || outcome3) {
      document.querySelector(
        ".scorer"
      ).textContent = `Computer wins (${computerThrow} beats ${humanThrow})!`;
      computerScore++;
    } else if (outcome1 || outcome4 || outcome5) {
      document.querySelector(
        ".scorer"
      ).textContent = `Human wins! (${humanThrow} beats ${computerThrow})!`;
      humanScore++;
    } else {
      document.querySelector(".scorer").textContent = `Nobody... wins?`;
    }
  }

  // Human Response

  if (prompter === "rock") {
    document.querySelector(".teller").textContent = "Rock thrown! (Human)";
    humanResponse = 1;
    humanThrow = "Rock";
  } else if (prompter === "paper") {
    document.querySelector(".teller").textContent = "Paper thrown! (Human)";
    humanResponse = 2;
    humanThrow = "Paper";
  } else if (prompter === "scissors") {
    document.querySelector(".teller").textContent = "Scissors thrown! (Human)";
    humanResponse = 3;
    humanThrow = "Scissors";
  } else {
    document.querySelector(".teller").textContent =
      "Error encountered, check your spelling!";
  }

  // Computer Response

  let computerResponse = Math.trunc(Math.random() * 3) + 1;

  if (computerResponse === 1) {
    document.querySelector(".tellertwo").textContent =
      "Rock thrown! (Computer)";
    computerThrow = "Rock";
  } else if (computerResponse === 2) {
    document.querySelector(".tellertwo").textContent =
      "Paper thrown! (Computer)";
    computerThrow = "Paper";
  } else if (computerResponse === 3) {
    document.querySelector(".tellertwo").textContent =
      "Scissors thrown! (Computer)";
    computerThrow = "Scissors";
  } else {
    document.querySelector(".tellertwo").textContent = "Computer error!";
  }

  const roundStorage = playRound(humanResponse, computerResponse);
}
