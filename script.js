var attemptCounter = document.getElementById("attemptCounter");
var guessOutput = document.getElementById("guessOutput");
const playAgain = document.getElementById("playAgain");
var guessValue, answer, attempt;

function start() {
    answer = Math.ceil(Math.random() * 1000);
    attempt = 10;
    attemptCounter.innerHTML = `Attempt ${attempt}`;
    document.getElementById("guessInput").value = "";
    guessOutput.innerHTML = "I will tell you if it's too high or low";
    playAgain.style.display = "none";
}

function guess() {
    guessValue = document.getElementById("guessInput").value;
    if (guessOutput.innerHTML == "Correct!") {
        return 0;
    }
    if (guessValue == "") {
        guessOutput.innerHTML = "Pick a number!";
        return 0;
    }
    if (guessValue > 1000) {
        guessOutput.innerHTML = "Number is out of limit!";
        return 0;
    }
    if(guessValue == answer) {
        guessOutput.innerHTML = "Correct!";
        playAgain.style.display = "block";
    }
    else if (guessValue > answer) {
        guessOutput.innerHTML = `${guessValue} is too high!`;
        attempt = attempt - 1;
    }
    else {
        guessOutput.innerHTML = `${guessValue} is too low!`;
        attempt = attempt - 1;
    }
    if(attempt < 1) {
        guessOutput.innerHTML = "You ran out of attempts";
        playAgain.style.display = "block";
        attempt = 0;
    }
    attemptCounter.innerHTML = `Attempt ${attempt}`;
}