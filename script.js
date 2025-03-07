// Pseudocode: Rock Paper Scissors //
/*
    1. Create the HTML + CSS (done)
    2. Ask the user for a value (done)
    3. Have the computer return a value (done)
    4. Finishing touches ()
    5. Push it all to GitHub and submit ()
*/

//console.log ("Hello World!")

let paper = 0;
let scissors = 1;
let rock = 2;



let text;
let response = prompt("Throw your hand now!")
let humanResponse = 0;

if (response === "rock" || response === "Rock" || response === "ROCK"){
   console.log("Rock thrown! (Player)");
   humanResponse = 2;
} else if (response === "paper" || response === "Paper" || response === "PAPER"){
   console.log("Paper thrown! (Computer)")
   humanResponse = 0;
} else if (response === "scissors" || response === "Scissors" || response === "SCISSORS"){
   console.log("Scissors thrown! (Computer)")
   humanResponse = 1;
} else {
   console.log("Error encountered, check your spelling!")
}


function getComputerChoice(){
    return Math.floor(Math.random()* 3)
}
let computerResponse = getComputerChoice(0, 2);
if (computerResponse === 0){
   console.log("Paper thrown! (Computer)")
} else if (computerResponse === 1){
   console.log("Scissors thrown!(Computer)")
} else if (computerResponse === 2){
   console.log("Rock thrown! (Computer)")
} else {
   console.log("Error encountered, check your spelling!")
}


if (humanResponse === computerResponse){
   console.log("Tie game!")
} else if (humanResponse = 2, computerResponse = 0){
   console.log("Computer wins!")
} else if (humanResponse = 0, computerResponse = 1){
   console.log("Computer wins!")
} else if (humanResponse = 1, computerResponse = 2){
   console.log("Computer wins!")
} else if (humanResponse = 2, computerResponse = 1){
   console.log("Player wins!")
} else if (humanResponse = 0, computerResponse = 2){
   console.log("Player wins!")
} else if (humanResponse = 1, computerResponse = 0){
   console.log("Player wins!")
} else {
   console.log("Nobody... wins?")
}






























