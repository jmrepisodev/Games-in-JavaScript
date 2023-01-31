const computerChoiceDisplay=document.getElementById("computer-choice");
const playerChoiceDisplay=document.getElementById("player-choice");
const resultDisplay=document.getElementById("result");

const possibleChoices=document.querySelectorAll("button");
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice=> possibleChoice.addEventListener("click", (e)=>{
    playerChoice=e.target.id;
    playerChoiceDisplay.innerHTML=playerChoice;
    

    generateComputerChoice();

    getResult();
}));

function generateComputerChoice() {
    //número aleatorio de 1 a 3
    let randomNumber=Math.floor(Math.random()*3)+1;

    switch(randomNumber){
        case 1:
            computerChoice="rock";
            break;
        case 2:
            computerChoice="paper";
            break;
        case 3:
            computerChoice="scissors";
            break;    
    }

    console.log(randomNumber);

    computerChoiceDisplay.innerHTML=computerChoice;

}

function getResult(){
    if(playerChoice.toLowerCase()===computerChoice.toLowerCase()){
        result="Empate";
    }

    if(playerChoice.toLowerCase()==="rock" && computerChoice.toLowerCase()==="paper"){
        result="¡Has perdido!";
    }

    if(playerChoice.toLowerCase()==="rock" && computerChoice.toLowerCase()==="scissors"){
        result="¡Has ganado!";
    }

    if(playerChoice.toLowerCase()==="paper" && computerChoice.toLowerCase()==="scissors"){
        result="¡Has perdido!";
    }

    if(playerChoice.toLowerCase()==="paper" && computerChoice.toLowerCase()==="rock"){
        result="¡Has ganado!";
    }

    if(playerChoice.toLowerCase()==="scissors" && computerChoice.toLowerCase()==="paper"){
        result="¡Has ganado!";
    }

    if(playerChoice.toLowerCase()==="scissors" && computerChoice.toLowerCase()==="rock"){
        result="¡Has perdido!";
    }

    resultDisplay.innerHTML=result;
    
}
   
