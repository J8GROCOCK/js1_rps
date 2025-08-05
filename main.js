function computerPlay() {
    const options = ["rock","paper","scissors"]
    let selector = Math.floor((Math.random() * 3))

    return options[selector]
}

function playerSelect() {
    const options = ["rock","paper","scissors"]
    while(true) {
        let input = prompt("Please type your selection (rock,paper or scissors)")

        if (input === null) return undefined;

        let playerSelection;
        if (options.includes(input.toLowerCase().trim())) {
            playerSelection = input.toLowerCase().trim()
            return playerSelection;
        } else {
            console.log(`${input} is not a valid option! Try again!`)
        }
    }

}

function playRound(playerSelection,computerSelection) {
    let result;

    if (playerSelection === undefined) {
        console.log("Player cancelled. Exiting game.");
        return;
    }
    if (playerSelection === computerSelection) {
        console.log("It's a Tie");
        return 0;
    }

    if (playerSelection === 'rock') {
        
        if (computerSelection === 'paper') {
            // player lose
            result = -1;
        } else if (computerSelection === 'scissors') {
            // player win
            result = 1;
        }
    } else if (playerSelection === 'paper') {
        
        if (computerSelection === 'rock') {
            // player win
            result = 1;
        } else if (computerSelection === 'scissors') {
            // player lose
            result = -1;
        }
    } else if (playerSelection === 'scissors') {
        
        if (computerSelection === 'rock') {
            // player lose
            result = -1;
        } else if (computerSelection === 'paper') {
            // player win
            result = 1;
        }
    }

    let msg;
    if (result === 1) {
        msg = `You Win This Round! ${playerSelection} beats ${computerSelection}`;
    } else if (result === -1) {
        msg = `You Lose This Round! ${computerSelection} beats ${playerSelection}`;
    }

    console.log(msg);
    
    // if result is a win return 1 else return 0
    return result;
    
}


function game(){
    let wins = 0;
    let losses = 0;
    let ties = 0;
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("There will be 5 rounds, you will select rock, paper or scissors and face off against the computer!");

    for(let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerSelect();

        const result = playRound(playerSelection,computerSelection);

        if (result === undefined) {
            return
        } else if (result === 1){
            wins++;
        } else if (result === -1){
            losses++;
        } else {
            ties++;
        }

    }

    console.log(`Final Score: \nWins: ${wins} \nLosses: ${losses} \nTies: ${ties}`);
    if (wins > losses) {
        //win msg
        console.log("You Win!");
    } else if (losses > wins) {
        // lose msg
        console.log("You Lose!");
    } else {
        // tie msg
        console.log("You Draw!");
    }


}