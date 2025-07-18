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

function getHumanChoice(){
    let humanChoice = prompt("What is your move?");
    humanChoice = humanChoice.toLowerCase()
    const rock= "Rock";
    const paper= "Paper";
    const scissors= "Scissors";
    if (humanChoice=="rock"){
        return rock;
    }
    if (humanChoice=="paper"){
        return paper;
    }
    if (humanChoice=="scissors"){
        return scissors;
    }
}

function playRound(humanChoice, computerChoice){    
    const rock= "Rock";
    const paper= "Paper";
    const scissors= "Scissors";

    //Rock beats scissors
    if (humanChoice === rock && computerChoice === scissors){
        console.log("You win! Rock beats Scissors");
        return 1;
    }
    else if (humanChoice === scissors && computerChoice === rock){
        console.log("You lose! Rock beats Scissors");
        return 0;
    }

    //Scissors beats paper
    else if (humanChoice === scissors && computerChoice === paper){
        console.log("You win! Scissors beats Paper");
        return 1;
    }
    else if (humanChoice === paper && computerChoice === scissors){
        console.log("You lose! Scissors beats Paper");
        return 0;
    }

    //paper beats rock
    else if (humanChoice === paper && computerChoice === rock){
        console.log("You win! Paper beats Rock");
        return 1;
    }
    else if (humanChoice === rock && computerChoice === paper){
        console.log("You lose! Paper beats Rock");
        return 0;
    }
    else{ 
        console.log("Tie!"); 
        return 2;
    }

}

function playGame(){
    let humanScore;
    let computerScore;

    humanScore = computerScore = 0;

    for (let i=0;i<5;i++){

        const humanChoice = getHumanChoice();
        console.log("Your choice: ", humanChoice);
        const computerChoice = getComputerChoice();
        console.log("Computer's choice: ",computerChoice);

        let whoWon = playRound(humanChoice, computerChoice);

        if (whoWon == 1) humanScore++;
        else if (whoWon==0) computerScore++;

        if (humanScore==3 || computerScore==3) break;
    }

    if (humanScore>computerScore){
        console.log("You won!");
    }
    else console.log("Computer won!");

}

playGame();





