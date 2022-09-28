var computerChoice;
var wins = 0;
var ties = 0;
var losses = 0;
var contPlay = false;

function getRandomInt(){
    return Math.floor(Math.random() * 3);
}

function computerWins() {
    window.alert("The computer beat you this round!");
    losses++;
}

function userWins() {
    window.alert("You beat the computer this round!");
    wins++;
}

// User enters website and is notfied they have entered a tournament
contPlay = window.confirm("This is the ROCK, PAPER, SCISSORS Virtual Tournament. After closing this message, you will be prompted for input. A computer will respond and your score will be tracked! Continue to enter!");

//If User enters a non-R, P, or S value, they are notified to re-enter a new entry. Correct entries proceed
while (contPlay) {
// After user dismisses introduction alert, they are prompted for an entry.
var userChoice = window.prompt("Enter R, P, or S for your entry.");
userChoice = userChoice.toUpperCase();
if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
    // After user enters a valid entry, the computer generates a random option to play against
        x = getRandomInt(); 
        if (x == 0){
            computerChoice = "R";
            window.alert("Your virtual opponent chose R!");
        } else if (x == 1){
            computerChoice = "P";
            window.alert("Your virtual opponent chose P!");
        } else {
            computerChoice = "S"
            window.alert("Your virtual opponent chose S!");
        }
    //After user responds to alert of computer choice the users and computers choices are compared. They are notified if they won, lost, or tied.
    
    if (userChoice === computerChoice) {
        window.alert("You tied with your opponent this round!")
        ties++;
    } else if ((userChoice == "R" && computerChoice == "P") || (userChoice == "P" && computerChoice == "S") || (userChoice == "S" && computerChoice == "R")) {
        computerWins();
    } else {
        userWins();
    }
    // User score is reported
    window.alert("Here is you record \n Wins: " + wins + "\n Losses: " + losses + "\n Ties: " + ties + "\n Good Job!")

    contPlay = window.confirm("Do you want to keep playing?")

} else {
    userChoice = window.prompt("That was not a valid entry. Please enter R, P, or S to play.")
}
}

window.alert("Thanks, for checking out the tournament!")
