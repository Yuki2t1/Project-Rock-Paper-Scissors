const btn1=document.querySelector("#rock")
const btn2=document.querySelector("#paper")
const btn3=document.querySelector("#scissors")
const DISPLAY=document.getElementById("DISPLAY");
//Takes the users input
DISPLAY.innerHTML="TRY YOUR LUCK"

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
    console.log(choice)
    return choice
}

let computerSelection=getComputerChoice()
//checks for the winner 
function playRound(humanSelection,computerSelection ){
    
    if ( (humanSelection === "ROCK" && computerSelection === "SCISSORS") ||(humanSelection === "PAPER" && computerSelection === "ROCK") ||(humanSelection === "SCISSORS" && computerSelection === "PAPER")){
        return "YOU WON"
    }else if(humanSelection===computerSelection){
        return "DRAW"

    }else{
        return "YOU LOST"
    }
}

btn1.addEventListener("click", playGame);

function playGame(){
        playRound(humanSelection,computerSelection)
        let humanScore =0
        let computerScore =0
        let human_lives=5
        let computer_lives=5
        //checks if you won and gives stats
        if (playRound(humanSelection,computerSelection)==="YOU WON"){
            computer_lives-=1
            humanScore+=1
            DISPLAY.innerHTML="YOU WON"+" "+"Your choice was"+" "+humanSelection+" "+"The computer's choice was"+" "+computerSelection
            //alert("Your score : "+" "+humanScore)
            //alert("Your remaining lifes"+" "+human_lives)
        }
        if (playRound(humanSelection,computerSelection)==="YOU LOST"){
            
            DISPLAY.innerHTML="YOU LOST !"
            //alert("Computer's score: "+" "+computerScore)
            //alert("Computer's remaining lifes "+" "+computer_lives)
            human_lives-=1
            computerScore+=1    
            }
        if(playRound(humanSelection,computerSelection)==="DRAW"){
            DISPLAY.innerHTML="DRAW!"
            
            humanScore+=1
            computerScore+=1  
        }
        //declares the final winner of all the rounds
        if (computer_lives ===0 && humanScore>computerScore){
            console.log("YOU WON !")
            //console.log("Your score : ",computerScore)
        }else if(human_lives===0 && humanScore<computerScore){
            console.log("GAME OVER!")
            //console.log("Computer's score : ", computerScore)
        }
    }

btn2.addEventListener("click", playGame);

    function playGame(){
            playRound(humanSelection,computerSelection)
            let humanScore =0
            let computerScore =0
            let human_lives=5
            let computer_lives=5
            //checks if you won and gives stats
            if (playRound(humanSelection,computerSelection)==="YOU WON"){
                computer_lives-=1
                humanScore+=1
                DISPLAY.innerHTML="YOU WON"+" "+"Your choice was"+" "+humanSelection+" "+"The computer's choice was"+" "+computerSelection
                //alert("Your score : "+" "+humanScore)
                //alert("Your remaining lifes"+" "+human_lives)
            }
            if (playRound(humanSelection,computerSelection)==="YOU LOST"){
                
                DISPLAY.innerHTML="YOU LOST !"
                //alert("Computer's score: "+" "+computerScore)
                //alert("Computer's remaining lifes "+" "+computer_lives)
                human_lives-=1
                computerScore+=1    
                }
            if(playRound(humanSelection,computerSelection)==="DRAW"){
                DISPLAY.innerHTML="DRAW!"
                
                humanScore+=1
                computerScore+=1  
            }
            //declares the final winner of all the rounds
            if (computer_lives ===0 && humanScore>computerScore){
                console.log("YOU WON !")
                //console.log("Your score : ",computerScore)
            }else if(human_lives===0 && humanScore<computerScore){
                console.log("GAME OVER!")
                //console.log("Computer's score : ", computerScore)
            }
        }

btn3.addEventListener("click", playGame);

        function playGame(){
                playRound(humanSelection,computerSelection)
                let humanScore =0
                let computerScore =0
                let human_lives=5
                let computer_lives=5
                //checks if you won and gives stats
                if (playRound(humanSelection,computerSelection)==="YOU WON"){
                    computer_lives-=1
                    humanScore+=1
                    DISPLAY.innerHTML="YOU WON"+" "+"Your choice was"+" "+humanSelection+" "+"The computer's choice was"+" "+computerSelection
                    //alert("Your score : "+" "+humanScore)
                    //alert("Your remaining lifes"+" "+human_lives)
                }
                if (playRound(humanSelection,computerSelection)==="YOU LOST"){
                    
                    DISPLAY.innerHTML="YOU LOST !"
                    //alert("Computer's score: "+" "+computerScore)
                    //alert("Computer's remaining lifes "+" "+computer_lives)
                    human_lives-=1
                    computerScore+=1    
                    }
                if(playRound(humanSelection,computerSelection)==="DRAW"){
                    DISPLAY.innerHTML="DRAW!"
                    
                    humanScore+=1
                    computerScore+=1  
                }
                //declares the final winner of all the rounds
                if (computer_lives ===0 && humanScore>computerScore){
                    console.log("YOU WON !")
                    //console.log("Your score : ",computerScore)
                }else if(human_lives===0 && humanScore<computerScore){
                    console.log("GAME OVER!")
                    //console.log("Computer's score : ", computerScore)
                }
            }
console.log(playGame())
