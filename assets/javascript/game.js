//GUessing game. Computer chooses a random letter and user has to guess which letter it is. Gets certain number of tries. 

//Additional stuff i'd like to add: a button to restart the game


//Initialize all variables 
var userInput;
var allGuesses = [];
var computerPick = [];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var alphabet = "abcdefghijklmnopqrstuvwxyz";    



//code for computer to pick a random letter
  computerPick += alphabet[Math.floor(Math.random() * alphabet.length)]; 
console.log(computerPick);

//code to tell user to enter a guess
userInput = prompt("Guess a letter!");
allGuesses.push(userInput);


//compare guess to compters randomly picked letter (use document.onkeyup = function())

//if same you won! increment wins by 1. restart game without refreshing game

//if guess is wrong, decrement guesses left. add the guess to the guesses so far. 