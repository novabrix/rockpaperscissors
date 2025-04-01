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
   8. Store the scores and declare a winner (done)
   9. Display the results in the box (done)
   10. Bug-killer (done)
   11. Merge the branches and push to GitHub ()
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
const tellertwo = document.querySelector(".tellertwo");
const scorer = document.querySelector(".scorer");
const numberer = document.querySelector(".numberer");

let humanScore = 0;
let computerScore = 0;
let winVar = false;

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
  if (humanScore < 5 && computerScore < 5) {
    // Game Logic

    function playRound(humanResponse, computerResponse) {
      let outcome1 = humanResponse === rock && computerResponse === scissors;
      let outcome2 = humanResponse === rock && computerResponse === paper;
      let outcome3 = humanResponse === paper && computerResponse === scissors;
      let outcome4 = humanResponse === paper && computerResponse === rock;
      let outcome5 = humanResponse === scissors && computerResponse === paper;
      let outcome6 = humanResponse === scissors && computerResponse === rock;

      if (humanResponse === computerResponse) {
        document.querySelector(
          ".scorer"
        ).textContent = `🪢Tie game (${humanThrow} vs. ${computerThrow})!`;
        document.querySelector(
          ".numberer"
        ).textContent = `${humanScore} to ${computerScore}`;
      } else if (outcome6 || outcome2 || outcome3) {
        document.querySelector(
          ".scorer"
        ).textContent = `🤖Computer wins (${computerThrow} beats ${humanThrow})!`;
        computerScore++;
        document.querySelector(
          ".numberer"
        ).textContent = `${humanScore} to ${computerScore}`;
      } else if (outcome1 || outcome4 || outcome5) {
        document.querySelector(
          ".scorer"
        ).textContent = `👱🏼Human wins! (${humanThrow} beats ${computerThrow})!`;
        humanScore++;
        document.querySelector(
          ".numberer"
        ).textContent = `${humanScore} to ${computerScore}`;
      } else {
        document.querySelector(".scorer").textContent = `Nobody... wins?`;
        document.querySelector(
          ".numberer"
        ).textContent = `${humanScore} to ${computerScore}`;
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
      document.querySelector(".teller").textContent =
        "Scissors thrown! (Human)";
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

  // Game End Checker

  if (computerScore > 4) {
    document.querySelector(".teller").style.fontSize = "40px";
    document.querySelector(".teller").style.margin = "10px"
    document.querySelector(".tellertwo").style.fontSize = "110px";
    document.querySelector(".tellertwo").style.margin = "0px"
    document.querySelector(".numberer").style.margin = "10px"

    document.querySelector(".teller").textContent = `Game End!`;
    document.querySelector(".tellertwo").textContent = `🤖`;
    document.querySelector(
      ".scorer"
    ).textContent = `Computer has won the game! ${computerScore} to ${humanScore}`;
    document.querySelector(".numberer").textContent = `Better luck next time!`;
    winVar = true;
  } else if (humanScore > 4) {
    document.querySelector(".teller").style.fontSize = "40px";
    document.querySelector(".teller").style.margin = "10px"
    document.querySelector(".tellertwo").style.fontSize = "110px";
    document.querySelector(".tellertwo").style.margin = "0px"
    document.querySelector(".numberer").style.margin = "10px"

    document.querySelector(".teller").textContent = `Game End!`;
    document.querySelector(".tellertwo").textContent = `👱🏼`;
    document.querySelector(
      ".scorer"
    ).textContent = `Human has won the game! ${humanScore} to ${computerScore}!`;
    document.querySelector(".numberer").textContent = `Congratulations!`;
    winVar = true;
  } else if ((humanScore < 0, computerScore < 0)) {
    document.querySelector(".teller").style.fontSize = "40px";
    document.querySelector(".teller").style.margin = "10px"
    document.querySelector(".tellertwo").style.fontSize = "110px";
    document.querySelector(".tellertwo").style.margin = "0px"
    document.querySelector(".numberer").style.margin = "10px"

    document.querySelector(".teller").textContent = `ERROR`;
    document.querySelector(".tellertwo").textContent = `?`;
    document.querySelector(
      ".scorer"
    ).textContent = `An error has occured! ${computerScore} to ${humanScore}`;
    document.querySelector(
      ".numberer"
    ).textContent = `Reload the page for a possible fix!`;
  }
  return winVar;
}
