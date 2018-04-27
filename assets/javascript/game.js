//GUessing game. Computer chooses a random letter and user has to guess which letter it is. Gets certain number of tries. 

//Additional stuff i'd like to add: a button to restart the game

window.onload = function() {
    //Initialize all variables 
    var userInput;
    var allGuesses = [] ;
    var lowerGuess;
    var computerPick;
    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";    


    //computer picks a random letter
function randomGenerator(){
    computerPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
    console.log("this is the computers choice: " + computerPick + "\n");
    // return computerPick;
}   
    
    //first input from user
function userTyped(){
        //tell user to enter a guess
    userInput = prompt("Guess a letter");
    lowerCase(userInput);
}

    //turns user input to lowercase
function lowerCase(manipulate){
    //confirm user input is a letter

    //make userInput lowercase
    lowerGuess = manipulate.toLowerCase();
    console.log("lowerGuess is now set as lowercase of user input")
    //add lowerGuess to allGuesses array
    allGuesses.push(lowerGuess);
    console.log("the lowercase guess is put into allGuesses Array");
}

function compare(lowerGuess, computerPick){
    //compare lowerGuess to computerPick
    if (lowerGuess === computerPick){
    //when same you won! increment wins by 1. restart game without refreshing game. type wins to DOM. type out what the answer was. type out a "you won" message
        wins++;
        //prevents the for loop from running anymore
        guessesLeft = 0;
        alert("You've won! The answer was " + userInput + "\n" + "Guesses left: " + guessesLeft + "\n" + "wins: " + "\n" + wins);


        //break;
    }
    else {
    //when guess is wrong, decrement guesses left. increment losses by 1
        guessesLeft--;
        alert("WRONG! Guess again!" + "\n" + "\n" + "Your guesses so far: " + allGuesses + "\n" + "Guesses remaining: " + guessesLeft);
        userTyped();

    // outputs value of guessesLeft to DOM
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("all-guesses").innerHTML = allGuesses;
    }
}

//make this a when function? with a button associated to it?

        //calls function to make a random letter
        randomGenerator();
        //console.log(computerPick);
        //calls function to ask user to enter first input 
        userTyped();
        //console.log(lowerGuess);
    while (guessesLeft > 0){
        //function: random letter generator/ maybe this shouldn't be here as it will generate a new letter every time. //

        //function: prompt user to input, make input lowercase
        // input();
        console.log("user input is: " + userInput);
        console.log("so far you've guessed: " + allGuesses);
        //function: compare input to comp letter
        compare(lowerGuess, computerPick);
        //ask user if theyd like to continue the game (continue button)
    }

}








