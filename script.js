// Pseudocode: Rock Paper Scissors //
/*
    1. Create the HTML + CSS (done)
    2. Ask the user for a value (partial)
    3. Have the computer return a value (partial)
    4. Finishing touches ()
    5. Push it all to GitHub and submit ()
*/

//console.log ("Hello World!")

let paper = 0;
let scissors = 1;
let rock = 2;


function getComputerChoice(){
    return Math.floor(Math.random()* 3)
}
let randomValue = getComputerChoice(0, 2);
console.log(randomValue);

let text;
let response = prompt("Throw your hand now!")

switch(response){
case " ":
    text = "Throw a hand already!... Don't be shy!";
    break;
 case "rock", "Rock", "ROCK":
    text = "Rock thrown!";
    break;
 case "scissors", "Scissors", "SCISSORS":
    text = "Scissors thrown!";
    break;
 case "paper", "Paper", "PAPER":
    text = "Paper thrown!";
    break;
 default :
    text = "Error encountered- check your spelling!";
    break;
}



