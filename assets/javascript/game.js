// //Additional stuff i'd like to add: a button to restart the game

window.onload = function() {
    //Initialize all variables 
    var userInput;
    var UpperGuess;
    var allGuesses = [" "];
    var computerPick;
    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    
//computer picks a random letter
function randomGenerator(){
    computerPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
    console.log("the random letter is: ", computerPick);
}   

document.onkeydown = function(event) {
    userInput = event.key.toUpperCase();
    if(guessesLeft > 0){
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            if (checkDup(userInput) === false){
                guessesLeft--;
                (allGuesses).push(userInput);
                $(".left").text(guessesLeft);
                $(".guessed").append(userInput);
            }
            else{
                console.log("the check is true, its a dupe!")
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



randomGenerator();
}