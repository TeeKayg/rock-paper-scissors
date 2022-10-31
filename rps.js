
let userChoice;
let currentComputerChoice;
let userWin = 0;
let computerWin = 0;

function playRound(userChoice, currentComputerChoice){
    let RPS = ["Rock" , "Paper" , "Scissors"];
    currentComputerChoice = RPS[Math.floor(Math.random()*RPS.length)];
    userChoice = prompt("Rock, Paper or Scissors?", "???");
    switch(userChoice){
    case "Rock":
        console.log("You have chosen Rock!");
        break;
    case "Paper":
        console.log("You have chosen Paper");
        break;
    case "Scissors":
        console.log("You have chosen Scissors");
        break;
    default:
        console.log("Incorrect choice");
    }

    console.log("The computer has chosen " + currentComputerChoice);
    if (currentComputerChoice === userChoice ){
    console.log("It's a Tie!");
    } else if (userChoice === "Rock" & currentComputerChoice === "Scissors"){
        userWin++;
    } else if (userChoice === "Rock" & currentComputerChoice === "Paper"){
        computerWin++;
    } else if (userChoice === "Paper" & currentComputerChoice === "Rock"){
        userWin++;
    } else if(userChoice === "Paper" & currentComputerChoice === "Scissors"){
        computerWin++;
    } else if(userChoice === "Scissors" & currentComputerChoice === "Paper"){
        userWin++;
    } else if(userChoice === "Scissors" & currentComputerChoice === "Rock"){
        computerWin++;
    }
}

function game(playRound){
    for (let i = 0; i < 5; i++){
        playRound(userChoice,currentComputerChoice);
        console.log("You have " + userWin + "points.");
        console.log("The computer has "+ computerWin +"points.");
    }
    if (userWin > computerWin){
        console.log("You Won!");
    } else if (computerWin > userWin){
        console.log("You Lost!");
    } else {
        console.log("It's a Tie!.")
    }
}
 game(playRound);

