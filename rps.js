
function getComputerChoice(RPS){
    return RPS[Math.floor(Math.random()*RPS.length)];
}
//Make prompt answers work with cases
let RPS = ["Rock" , "Paper" , "Scissors"];
let userChoice = prompt("Rock, Paper or Scissors?", "???");
let currentComputerChoice = getComputerChoice(RPS);
let userWin = 0;
let computerWin = 0;


function playRound(userChoice, currentComputerChoice){
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
    return "It's a Tie!";
    } else if (userChoice === "Rock" & currentComputerChoice === "Scissors"){
        return userWin++;
    } else if (userChoice === "Rock" & currentComputerChoice === "Paper"){
        return computerWin++;
    } else if (userChoice === "Paper" & currentComputerChoice === "Rock"){
        return userWin++;
    } else if(userChoice === "Paper" & currentComputerChoice === "Scissors"){
        return computerWin++;
    } else if(userChoice === "Scissors" & currentComputerChoice === "Paper"){
        return userWin++;
    } else if(userChoice === "Scissors" & currentComputerChoice === "Rock"){
        return computerWin++;
    }
}

function game(playRound){
    for (let i = 0; i < 5; i++){
        console.log(playRound(userChoice,currentComputerChoice));
    }
}
 console.log(game(playRound));

