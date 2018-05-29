// //Additional stuff i'd like to add: a button to restart the game

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
    
//computer picks a random letter
function randomGenerator(){
    computerPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
    $(".guessed").empty();
    allGuesses.length = 0;
    guessesLeft = 5;
    console.log("the random letter is: ", computerPick);
}   

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
            else{
                console.log("its a dupe!")
            }

        }
        else {
            console.log("invalid input");
        }

    }
    else{
        console.log("no more guesses left")
    }
}

function checkDup(input){
    for (var i=0; i<allGuesses.length; i++){
        if (input === allGuesses[i]){ 
            return true;
        }
    }
        return false; 
}

function checkMatch(currInput) {
    if (currInput === computerPick){
        wins++;
        console.log("you win!");
        $(".wins").text(wins);
        randomGenerator();
    }
    else {
        console.log("nahhh");
        if (guessesLeft === 0){
            console.log("you lose");
            losses++;
            $(".losses").text(losses);
            randomGenerator();
        }
        else {
            (allGuesses).push(currInput);
        }
    }
}

randomGenerator();
}