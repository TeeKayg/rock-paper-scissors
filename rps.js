
function getComputerChoice(RPS){
    return RPS[Math.floor(Math.random()*RPS.length)];
}

let RPS = ["Rock" , "Paper" , "Scissors"];
console.log(getComputerChoice(RPS));
