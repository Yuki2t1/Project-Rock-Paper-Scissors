const btn1=document.querySelector("#rock")
const btn2=document.querySelector("#paper")
const btn3=document.querySelector("#scissors")
const DISPLAY=document.getElementById("DISPLAY");
const t=document.getElementById("t");
//Takes the users input


let humanSelection=""   
btn1.addEventListener("click",()=>{
    humanSelection="ROCK"
    console.log(humanSelection)
})
btn2.addEventListener("click",()=>{
    humanSelection="PAPER"
    console.log(humanSelection)
})
btn3.addEventListener("click",()=>{
    humanSelection="SCISSORS"
    console.log(humanSelection)
})




//Takes the computer's input
function getComputerChoice(){
        list=["ROCK","PAPER","SCISSORS"]
        let counter=Math.floor(Math.random()*3)
        let choice=list[counter]
        
    
}

let computerSelection=getComputerChoice()
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

let rounds=5

function playGame(){
    rounds--
    console.log(rounds)
    playRound(humanSelection,computerSelection)
    let humanscore=0
    let state=""

    switch ( playRound(humanSelection,computerSelection)){
        case "YOU WON":
            
            DISPLAY.innerHTML="YOU WON"+" "+"YOUR CHOICE WAS"+" "+humanSelection+" "+"THE COMPUTER'S CHOICE WAS"+" "+computerSelection
            humanscore+=1
            state="win"
            console.log(state)
            console.log(humanscore)
        case "YOU LOST":
            
            state="lost"
            DISPLAY.innerHTML="YOU LOST !"
            console.log(state)
            console.log(humanscore)
             
        case  "DRAW":
            DISPLAY.innerHTML="tie!"
            state="tie"
            console.log(state)
            console.log(humanscore)
            
        }
        if (rounds===0){
            btn1.disabled=true
        }
        t.textContent="Rounds"+" "+rounds;
    }
    


        

