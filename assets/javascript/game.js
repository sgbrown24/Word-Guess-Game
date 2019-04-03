
//computer letter
window.onload = function() {
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
    
    
    //variables for tracking player wins, losses ans guesses left
    var wins = 0;
    var losses = 0;
    var computerGuess = [];
    var lettersGuessed = [];
    var guessesLeft = 9;
//    var usersGuesses;
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(computerChoice);
    


    console.log(computerChoice)
// game
document.onkeyup = function(event) {
    var playerGuess = event.key;
    console.log(playerGuess)
    lettersGuessed.push(playerGuess);
    console.log(lettersGuessed);
    if (playerGuess === computerChoice && guessesLeft > 0) {
        wins++;
        console.log(wins)
        guessesLeft = 9;
        lettersGuessed.length = 0;
        // document.getElementById("usersGuesses").innerHTML = usersGuesses 
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess[0]);
        document.getElementById("wins").innerHTML = wins
        



    }

else if (playerGuess !== computerChoice && guessesLeft > 0) {
    guessesLeft--;
console.log(guessesLeft)
document.getElementById("guessesLeft").innerHTML = guessesLeft
}


else {
    losses++;
    guessesLeft = 9;
    // letterGuessed.length = 0;
  computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById("losses").innerHTML = losses

}
}
}





