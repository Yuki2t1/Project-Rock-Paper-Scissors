const btn1=document.querySelector("#rock")
const btn2=document.querySelector("#paper")
const btn3=document.querySelector("#scissors")
const DISPLAY=document.getElementById("DISPLAY");
const round=document.getElementById("round");
const wining_state=document.getElementById("wining_state");
const startover=document.getElementById("reset");
let rounds=6
let humanscore=6
let computerscore=0


//Takes the users input
let humanSelection=""
btn1.addEventListener("click",()=>{
    humanSelection="ROCK"
    
})
btn2.addEventListener("click",()=>{
    humanSelection="PAPER"
    
})
btn3.addEventListener("click",()=>{
    humanSelection="SCISSORS"
    
})




//Takes the computer's input


function getComputerChoice(){
    list=["ROCK","PAPER","SCISSORS"]
    let counter=Math.floor(Math.random()*3)
    let choice=list[counter]
    return (choice)
}




//checks for the winner 
function playRound(humanSelection,computerSelection ){


    if ( (humanSelection === "ROCK" && computerSelection === "SCISSORS") ||(humanSelection === "PAPER" && computerSelection === "ROCK") ||(humanSelection === "SCISSORS" && computerSelection === "PAPER")){

        return "YOU WON"
        
    }else if(humanSelection===computerSelection){
        
        return "DRAW"
        
    }else{
        
        return"YOU LOST"
        
    }
}

 
function playGame(){
    let computerSelection=getComputerChoice()
    rounds--
    playRound(humanSelection,computerSelection)
    
    if  (playRound(humanSelection,computerSelection)==="YOU WON"){
        DISPLAY.innerHTML="YOU WON THE ROUND"
        computerscore-=1
        humanscore+=1
    }
    if(playRound(humanSelection,computerSelection)==="YOU LOST"){
        humanscore-=1
        computerscore+=1
        DISPLAY.innerHTML="YOU LOST THE ROUND !"
    }
    if(playRound(humanSelection,computerSelection)==="DRAW"){
        humanscore+=1
        computerscore+=1
        DISPLAY.innerHTML="YOU TIED THE ROUND!"
    }
    if (rounds==0 && computerscore>humanscore){
            btn1.disabled=true
            btn2.disabled=true
            btn3.disabled=true
            wining_state.textContent="YOU LOST THE GAME"
    }else if(rounds==0 &&computerscore<humanscore){
            btn1.disabled=true
            btn2.disabled=true
            btn3.disabled=true
            wining_state.textContent="YOU WON THE GAME"
    }else if(rounds==0 &&computerscore===humanscore){
            btn1.disabled=true
            btn2.disabled=true
            btn3.disabled=true
            wining_state.textContent="YOU TIED THE GAME"}
            round.textContent="Rounds LEFT:"+"  "+rounds;   
    }
playGame()
