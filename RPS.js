
function RPS(computerSelection, playerSelection) {
    

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

function computerSelection() {
    
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

var playerName = document.getElementById("input-box")



