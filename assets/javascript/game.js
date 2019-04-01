

// array of words
var word = ['Wendy', 'Tinker Bell', 'Alice', 'Kuzco', 'Happy', 'Pocahontas', 'Pongo', 'Winnie the pooh',
'Mulan', 'Beast', 'Gaston', 'Aladdin', 'Lilo', 'Esmeralda', 'Nala'];
// randomly choose
var randNum = Math.floor(Math.random() * word.length); 
var choosenWord = word[randNum];
var rightGuesses = [];
var wrongGuesses = [];
var underScore = [];
var usersGuesses = [];
var guessesLeft = 10;
var isFinished = false;
var numLosses = 0;
var numWins = 0;
console.log(choosenWord);

// / dom manipulation....note to self
// var docUnderScore = document.getElementsById('underScore'); 
var guessesDiv = document.getElementById("guessesLeft");        
// var docRightGuess = document.getElementsById("rightGuesses");    
// var docWrongGuesses = document.getElementsById( "wrongGuesses");

// the underScore based on the length of the word by creating a for loop
var generateUnderscore = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push('-');
         }
        
    return underScore;
}
// document.getElementById("choosenWord").innerHTML = "  " + underScore.join("  ")

// getting users guess  
document.addEventListener('keypress', (event) =>{
    var keycode = event.key;
    if (guessesLeft <= 0) {
        alert("Game over");
        console.log("this is the keyboard" ,keycode); 
    }
    if (usersGuesses.includes(keycode) == false) 
        usersGuesses.push(keycode);
        
        

        function checkGuess(letter) {
if (wrongGuesses.indexOf(letter) === -1) {
    wrongGuesses.push(letter);
    //if the letter isn't in the answer word then -1 the GuessesLeft
    if (choosenWord.indexOf(letter) === -1) {
        guessesLeft--;
    } else { 
        for (var i = 0; i < choosenWord.length; i++) {
            if (letter === choosenWord[i]) {
                underScore[i] = letter;
           }
        }
    }    
}
};       
    //function to check if the player is a winner
    function isWinner() {
        if (underScore.indexOf("_") === -1) {
            Wins++;
            isFinished = true;
    }   
};
    //function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 num Losses and switch isFinished to true
    if(guessesLeft<= 0) {
        numLosses++;
        isFinished = true;
    }
};  

//event listener for key pressed
document.onkeyup = function(event) {
    
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
    }
};


         
//updates the HTML from the functions
document.getElementById("guessesLeft").innerHTML=guessesLeft;
document.getElementById("Wins").innerHTML = Wins;
document.getElementById("underScore").innerHTML = underScore;


console.log("these are the users guesses",usersGuesses);
   console.log("amount of guesses left", guessesLeft);
   console.log("testing",keycode);

    
});


