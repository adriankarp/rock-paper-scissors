    //function to obtain computer choice
    function computerPlay() {

        let choices = ["Rock", "Paper", "Scissors"];
        let computerMove = choices[Math.floor(Math.random() * choices.length)];
        return computerMove;
    }


//function for a round of play
function playRound(playerSelection, computerSelection) {
    let player = prompt("Choose your move: (Rock, Paper or Scissors)").toUpperCase();
    let computer = computerPlay().toUpperCase();

    if (player == "ROCK" && computer == "ROCK") {
        alert("It's a tie!");
        return "draw";
    } else if (player == "PAPER" && computer == "PAPER") {
        alert("It's a tie!");
        return "draw";
    } else if (player == "SCISSORS" && computer == "SCISSORS") {
        alert("It's a tie!");
        return "draw";
    } else if (player == "ROCK" && computer == "PAPER") {
        alert("You lose, paper beats rock!");
        return "lose";
    } else if (player == "ROCK" && computer == "SCISSORS") {
        alert("You won, rock beats paper!");
        return "win";
    } else if (player == "PAPER" && computer == "ROCK") {
        alert("You won, paper beats rock!");
        return "win";
    } else if (player == "PAPER" && computer == "SCISSORS") {
        alert("You lose, scissors beats paper!");
        return "lose";
    } else if (player == "SCISSORS" && computer == "ROCK") {
        alert("You lose, rock beats scissors!");
        return "lose";
    } else if (player == "SCISSORS" && computer == "PAPER") {
        alert("You won, paper beats scissors!");
        return "win";
    } else {
        alert("Are sure you entered rock, paper or scissors!?");
        return "invalid";
    }



}

//function for a 5 rounds game
function game() {
    let win = 0;
    let lose = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === "win") win += 1;
        if (result === "lose") lose += 1;
        if (result === "draw") draw += 1;
        if (result === "invalid") i--;
    }

    alert(
        "Score: you have won " +
        win +
        " round(s), lost " +
        lose +
        " round(s), and tied " +
        draw +
        " round(s)."
    );

    if (win > lose) {
        alert("You won! Congratulations.");
    } else if (win < lose) {
        alert("Too bad, you lost!");
    } else {
        alert("It's a draw!");
    }
}

//call of function game();
game();
