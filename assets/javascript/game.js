// GLOBAL VARIABLES
// =================================================================


// marble Variables
var marble = {
  marble1:
  {
    name: "marble1",
    value: 0
  },
  marble2:
  {
    name: "marble2",
    value: 0
  },
  marble3:
  {
    name: "marble3",
    value: 0
  },
  marble4:
  {
    name: "marble4",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the marbles (between 1 and 12)
  marble.marble1.value = getRandom(1, 12);
  marble.marble3.value = getRandom(1, 12);
  marble.marble2.value = getRandom(1, 12);
  marble.marble4.value = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("marble1: " + marble.marble1.value + " | marble2: " + marble.marble2.value + " | marble3: " + marble.marble3.value +
    " | marble4: " + marble.marble4.value);
  console.log("-----------------------------------");
};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#lossCount").html(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#winCount").html(winCount);

    // Restart the game
    startGame();
  }

};

// Respond to clicks on the marbles
var addValues = function(clickedmarble) {

  // Change currentScore
  currentScore += clickedmarble.value;

  // Change the HTML to reflect changes in currentScore
  $("#yourScore").html(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#marble1").click(function() {
  addValues(marble.marble1);
});

$("#marble3").click(function() {
  addValues(marble.marble3);
});

$("#marble2").click(function() {
  addValues(marble.marble2);
});

$("#marble4").click(function() {
  addValues(marble.marble4);
});

// Instructions
$( "#instructions" ).click(function() {
  alert( "Instructions: You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to random number, you lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time when the game starts, the game will change the values of each crystal.");
});
