function getComputerChoice(){
    const randomChoice = Math.random()*10;
    const rock= "Rock";
    const paper= "Paper";
    const scissors= "Scissors";
    if (randomChoice < 10/3){
        return rock;
    }
    else if (randomChoice < 20/3){
        return paper;
    }
    else{
        return scissors;
    }
}

function checkGameEnd(){
    if (humanScore === 5){
        result.textContent = `You win the game! The final score was ${humanScore}-${computerScore}`;
        return;
    }
    if (computerScore === 5){
        result.textContent = `You lost the game! The final score was ${humanScore}-${computerScore}`;
        return;
    }
}
function playRound(humanChoice, computerChoice){
    const rock= "Rock";
    const paper= "Paper";
    const scissors= "Scissors";
    
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }
    //Rock beats scissors
    if (humanChoice === rock && computerChoice === scissors){
        result.textContent = "You win! Rock beats Scissors";
        scoreCounter(1);
    }
    else if (humanChoice === scissors && computerChoice === rock){
        result.textContent = "You lose! Rock beats Scissors";
        scoreCounter(0);
    }

    //Scissors beats paper
    else if (humanChoice === scissors && computerChoice === paper){
        result.textContent = "You win! Scissors beats Paper";
        scoreCounter(1);
    }
    else if (humanChoice === paper && computerChoice === scissors){
        result.textContent = "You lose! Scissors beats Paper";
        scoreCounter(0);
    }

    //paper beats rock
    else if (humanChoice === paper && computerChoice === rock){
        result.textContent = "You win! Paper beats Rock";
        scoreCounter(1);
    }
    else if (humanChoice === rock && computerChoice === paper){
        result.textContent = "You lose! Paper beats Rock";
        scoreCounter(0);
    }
    else{ 
        result.textContent = "Tie!"; 
        scoreCounter();
    }
    checkGameEnd();
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector("div");

let humanScore;
let computerScore;
humanScore = computerScore = 0;
function scoreCounter(score){
    if (score === 1){
        humanScore++;
        result.textContent += `... You: ${humanScore} Computer: ${computerScore}`;  
    } 
    else if (score === 0){
        computerScore++;
        result.textContent += `... You: ${humanScore} Computer: ${computerScore}`;
    }
    else {
        result.textContent += `... You: ${humanScore} Computer: ${computerScore}`;
    }
}


buttons.forEach((button) => {
    if (humanScore < 5 && computerScore < 5){
        button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    })
    };
})





// function playGame(){
//     let humanScore;
//     let computerScore;

//     humanScore = computerScore = 0;

    

//     for (let i=0;i<5;i++){
//         const humanChoice = getHumanChoice();
//         console.log("Your choice: ", humanChoice);
//         const computerChoice = getComputerChoice();
//         console.log("Computer's choice: ",computerChoice);

//         let whoWon = playRound(humanChoice, computerChoice);

//         if (whoWon == 1) humanScore++;
//         else if (whoWon==0) computerScore++;

//        if (humanScore==3 || computerScore==3) break; 
 
//     if (humanScore>computerScore){
//         console.log("You won!");
//     }
//     else console.log("Computer won!");
// }}








