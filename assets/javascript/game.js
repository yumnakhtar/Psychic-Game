// //Additional stuff i'd like to add: a button to restart the game, somehwere that displays the answer

window.onload = function() {
    //Initialize all variables 
    var userInput;
    var UpperGuess;
    var allGuesses = [];
    var computerPick;
    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    
//computer picks a random letter and clears out all the guessed letters
function randomGenerator(){
    computerPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
    $(".guessed").empty();
    allGuesses.length = 0;
    guessesLeft = 5;
}   

//listens for a key down
document.onkeydown = function(event) {
    userInput = event.key.toUpperCase();
    if(guessesLeft > 0){
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            if (checkDup(userInput) === false){
                guessesLeft--;
                $(".left").text(guessesLeft);
                $(".guessed").append(userInput);
                checkMatch(userInput);
            }
        }
    }
}

//checks to see if current input is unique from previous guesses
function checkDup(input){
    for (var i=0; i<allGuesses.length; i++){
        if (input === allGuesses[i]){ 
            return true;
        }
    }
        return false; 
}

//compares input to the computerPick
function checkMatch(currInput) {
    if (currInput === computerPick){
        wins++;
        $(".wins").text(wins);

        randomGenerator();
    }
    else {
        if (guessesLeft === 0){
            losses++;
            $(".losses").text(losses);
            randomGenerator();
        }
        else {
            (allGuesses).push(currInput);
        }
    }
}

//restart game
$("button").click(function(){
    wins = 0;
    losses = 0;
    $(".wins").text(wins);
    $(".losses").text(losses);
    randomGenerator();
    $(".left").text(guessesLeft);
})

//calling function to generate a random number
randomGenerator();
}