// array of words
const word = ['Wendy', 'Tinker Bell', 'Alice', 'Kuzco', 'Happy', 'Pocahontas', 'Pongo', 'Winnie the pooh',
'Mulan', 'Beast', 'Gaston', 'Aladdin', 'Lilo', 'Esmeralda', 'Nala'];
// randomly choose
let randNum = Math.floor(Math.random() * word.length); 
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let usersGuesses = [];
let guessesLeft = 10;
console.log(choosenWord);
// / dom manipulation....note to self
let docUnderScore = document.getElementsByClassName('underScore');
let guessesDiv = document.getElementById("guessesLeft")
// the underScore based on the length of the word by creating a for loop
let generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push('-');
         }
    return underScore;
}

// getting users guess note to self
document.addEventListener('keypress', (event) =>{
    let keycode = event.key;
    if (guessesLeft <= 0) {
        alert("Game over");
        console.log("this is the keyboard" ,keycode);
    }
    if (usersGuesses.includes(keycode) == false) {
        usersGuesses.push(keycode);
        
        guessesLeft--;
        // document.getElementById("guessesLeft").innerHTML(guessesLeft)
    
       
}

console.log("these are the users guesses",usersGuesses);
   console.log("amount of guesses left", guessesLeft);
   console.log("testing",keycode);

    // console.log(keycode);
    //  let keyword = string.fromCharCode(event.keycode); 


});

