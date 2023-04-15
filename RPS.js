

function winner(computerSelection, playerSelection) {
    
    var playerSelection = playerSelection.toLowerCase()
    if (computerSelection == playerSelection) {

        return "Draw!"

    } else if (
    (playerSelection == 'rock' && computerSelection  == 'scissors') || 
    (playerSelection == 'paper' && computerSelection  == 'rock') || 
    (playerSelection == 'scissors' && computerSelection  == 'paper')) {

        return "Player Wins!"

    } else {

        return "Computer Wins!"

    }


}

function computerSelectionFunc() {
    
    var randomInt = Math.round((Math.random()*100) + 1);
    if (randomInt % 3 == 0) {
        
        return 'rock';
        
    } else if (randomInt % 2 == 0) {

        return 'scissors';
    
    } else {

        return 'paper';
    
    }

}


/*const playerSelection = prompt('rock, paper, scissors').toLowerCase()
const compSelection = computerSelection()
console.log(playerSelection, compSelection, RPS(compSelection, playerSelection))*/




const rock = document.querySelector("#button1")
const paper = document.querySelector("#button2")
const scissors = document.querySelector("#button3")
const playerPlaceholder = document.querySelector("#player-name")
const resultsContainer = document.querySelector("#results-div")
const playerSelectionTag = document.querySelector("#player-selection")
const computerSelectionTag = document.querySelector("#computer-selection")
const winnerTag = document.querySelector("#winner-tag")


rock.addEventListener('click', () => {playGame('Rock')})
paper.addEventListener('click', () => {playGame('Paper')})
scissors.addEventListener('click', () => {playGame('Scissors')})

function playGame(playerSelection) {
    
    resultsContainer.setAttribute("style", "display: flex;")
    var computerSelection = computerSelectionFunc()
    var playerName = document.querySelector("#input-box").value
    if (playerName == ""){
        playerName = "Player"
    } else {

        playerPlaceholder.innerText = playerName + ":"

    }
    
    playerSelectionTag.innerText = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    computerSelectionTag.innerText = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    winnerTag.innerText = winner(computerSelection,playerSelection)
    
}