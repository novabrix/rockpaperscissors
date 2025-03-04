// Pseudocode: Rock Paper Scissors //
/*
    1. Create the HTML + CSS (done)
    2. Ask the user for a value (partial)
    3. Have the computer return a value (partial)
    4. Finishing touches ()
    5. Push it all to GitHub and submit ()
*/

console.log ("Hello World!")

function getComputerChoice(max){
    return Math.floor(Math.random()* max)
}

console.log(getComputerChoice(3))

/*function roshambo(){
    let compAns = null;

    if (getComputerChoice = 0) {
        compAns = rock;
    } else if (getComputerChoice = 1){
        compAns = scissors;
    } else if (getComputerChoice = 2){
        compAns = paper;
    } else {
        compAns = "Error encountered!";
    }
    alert(compAns)
    return compAns;
}*/

let response = prompt("Throw your hand now!")

function humanResponse(){
    if (response === null) {
       let glep = "Error alert! Error alert!"
    } else if (sign.toLowerCase() === ""){
       let glep = ("Throw a sign already!! ....Don't be shy!")
    } else if (sign.toLowerCase() === "rock"){
       let glep = ("Rock thrown!")
    } else if (sign.toLowerCase() === "scissors"){
       let glep = "Scissors thrown!"
    } else if (sign.toLowerCase() === ""){
       let glep = "Paper thrown!"
    }
    return glep;
}


