
  var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
  var winsCounter = 0;
  var lossesCounter = 0;
  var guessesCounter = 9;
  var guessesArray = [];
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
  
  //function to reset number of guesses to "9"
  function reset() {
      document.getElementById("guesses_left").textContent = guessesCounter;
      guessesCounter = 9;
  }

  //function to update counters
  function updateDisplays() {
      document.getElementById("wins").textContent = winsCounter;
      document.getElementById("losses").textContent = lossesCounter;
      document.getElementById("guesses_left").textContent = guessesCounter;
      document.getElementById("guesses").textContent = guessesArray;

  }

  document.onkeyup = function(event) {
    var userGuess = event.key;
    guessesArray.push(userGuess);
    document.getElementById("guesses").textContent = guessesArray;

    if (userGuess === computerGuess) {
        ++winsCounter;
        alert("You Win!")
        alert("New Letter!")
        reset();
        guessesArray = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //console.log(computerGuess);

    } else if (userGuess || computerGuess) {
        --guessesCounter;

    } if (guessesCounter <= 0) {
        ++lossesCounter;
        alert("You Lose!");
        alert("New Letter!");
        reset();
        guessesArray = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //console.log(computerGuess);
    }
    updateDisplays();
  };