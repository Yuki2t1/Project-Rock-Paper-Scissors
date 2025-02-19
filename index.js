function getHumanChoice() {
    let choice=prompt("choose rock paper or scissors : ").toUpperCase()
    console.log(choice)
    return choice
}

function getComputerChoice(){
    list=["ROCK","PAPER","SCISSORS"]
    let counter=Math.floor(Math.random()*3)
    let choice=list[counter]
    console.log(choice)
    return choice
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection,computerSelection ){
    
    if ( (humanSelection === "ROCK" && computerSelection === "ROCK") ||(humanSelection === "PAPER" && computerSelection === "PAPER") ||(humanSelection === "SCISSORS" && computerSelection === "SCISSORS")){
        return "YOU WON"
    }else{
        return "YOU LOST"

    }
}
function playGame(){
    do{
        playRound(humanSelection,computerSelection)
    let humanScore =0
    let computerScore =0
    let human_lives=5
    let computer_lives=5
    if (playRound(humanSelection,computerSelection)==="YOU WON"){
        
        computer_lives-=1
        humanScore+=1
        alert("YOU WON !")
        alert("Your score : ",computerScore)
    }else{
        alert("YOU lost !")
        alert("computer's lives",computer_lives)
        human_lives-=1
        computerScore+=1    
    }
    if (computer_lives ===0 && humanScore>computerScore){
        console.log("YOU WON !")
        console.log("Your score : ",computerScore)
    }else if(human_lives===0 && humanScore<computerScore){
        console.log("GAME OVER!")
        console.log("computer's score : ", computerScore)
    }
    }while(human_lives>0 && computer_lives>0 );
    
}
console.log(playGame())