

 
  var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
  var winsCounter = 0;
  var lossesCounter = 0;
  var guessesCounter = 9;
  var guessesArray = [];
  //document.getElementById("wins").textContent = "wins" + winsCounter;
  //document.getElementById("losses").textContent = "losses" + lossesCounter;
  //document.getElementById("guesses_left").textContent = "guesses_left" + guessesCounter;
  //document.getElementById("guesses").textContent = "guesses" + guessesArray;

  function clearArray() {
      guessesArray = [];
  }
  
  function reset() {
      document.getElementById("guesses_left").textContent = guessesCounter;
      guessesCounter = 9;
  }

  function computerPick() {
      return computerChoices [Math.floor(Math.random() * computerChoices.length)];
  }
  var computerGuess = computerPick();
  console.log(computerGuess);


  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
      var userGuess = event.key;
      guessesArray.push(userGuess);
      document.getElementById("guesses").textContent = guessesArray;

        if (userGuess === computerGuess) {
        document.getElementById("wins").textContent = ++winsCounter;
        alert("You Win!");
        alert("New Letter!");
        reset();
        console.log(guessesCounter);
        //var computerGuess = a();
        //console.log(computerGuess);
        clearArray();

        } else if (userGuess || computerGuess) {
            document.getElementById("guesses_left").textContent = --guessesCounter;
        
        } if (guessesCounter <= 0) {
            document.getElementById("losses").textContent = ++lossesCounter;
            alert("You Lose!");
            alert("New Letter!");
            //var computerGuess = a();
            //console.log(computerGuess);
            reset();
            console.log(guessesCounter);
            clearArray();
        }
   };