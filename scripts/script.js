let playerWin = 0;
let computerWin = 0;
let ties = 0;


//function to obtain players choice
function playerSelection() {
    const playerSelection = document.querySelector("button[id]");
    return playerSelection;
}

//function to obtain computer choice
function computerPlay() {

    let choices = ["rock", "paper", "scissors"];
    let computerMove = choices[Math.floor(Math.random() * choices.length)];
    return computerMove;
}


//function to reset the table
function reset() {
    playerWin = 0;
    document.querySelector("#wins").innerHTML = 'Wins: 0';
    computerWin = 0;
    document.querySelector("#loses").innerHTML = 'Loses: 0';
    ties = 0;
    document.querySelector("#ties").innerHTML = 'Ties: 0';
    document.querySelector("#roundResult").innerHTML = "Choose rock, paper or scissors";
    return;
}

//function for winning
function win(player, computer) {
    document.querySelector("#roundResult").innerHTML = "You won, " + player + " beats " + computer;
    document.querySelector("#wins").innerHTML = "Wins: " + playerWin;
    if (playerWin == 5) {
        alert("You are the winner! Good job");
        reset();
    }
}


//function for losing
function lose(player, computer) {
    document.querySelector("#roundResult").innerHTML = "You lost, " + computer + " beats " + player;
    document.querySelector("#loses").innerHTML = "Loses: " + computerWin;
    if (computerWin == 5) {
        alert("Too bad! You lost...");
        reset();
    }
}


//function for a round of play
function playRound(playerSelection, computer) {
    let player = playerSelection.toLowerCase();
    if (player == "rock" && computer == "paper") {
        computerWin++;
        return lose(player, computer);
    } else if (player == "paper" && computer == "scissors") {
        computerWin++;
        return lose(player, computer);
    } else if (player == "scissors" && computer == "rock") {
        computerWin++;
        return lose(player, computer);
    } else if (player == "rock" && computer == "scissors") {
        playerWin++;
        return win(player, computer);
    } else if (player == "scissors" && computer == "paper") {
        playerWin++;
        return win(player, computer);
    } else if (player == "paper" && computer == "rock") {
        playerWin++;
        return win(player, computer);
    } else {
        tie++;
        document.querySelector("#roundResult").innerHTML = `It's a tie!`;
        document.querySelector("#ties").innerHTML = `Ties: ` + ties;
    }
}

document.body.addEventListener('click', event => {
    if (event.target.nodeName == "BUTTON") {
        playRound(event.target.textContent, computerPlay());
    }
});