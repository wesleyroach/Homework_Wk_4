// global variables
var crystal = {
  sapphire: {
    name: "Sapphire",
    value: 0
  },
  emerald: {
    name: "Emerald",
    value: 0
  },
  ruby: {
    name: "Ruby",
    value: 0
  },
  diamond: {
    name: "Diamond",
    value: 0
  }
};

var totalWins = 0;
var totalLosses = 0;

// functions
// random number function:
var getRandomnumber = function(min, max) {
  return math.floor(math.random() * (max - min + 1) + min);
};

// start & reset of game function
var startGame = function() {
  // reset the current score
  var currentScore = 0;
  var targetScore = 0;

  //set a new target score b/w 19 & 120
  targetScore = getRandomnumber(19, 120);
  crystal.sapphire.value = getRandomnumber(1, 12);
  crystal.emerald.value = getRandomnumber(1, 12);
  crystal.ruby.value = getRandomnumber(1, 12);
  crystal.diamond.value = getRandomnumber(1, 12);

  // set different values for each of the crystals b/w 1 & 12

  // change the HTML to show these changes
  $("yourScore").html(currentScore);
  $("#targetScore").html(targetScore);
};
// change values when crystals are clicked
var addValues = function(crystal) {
  currentScore = currentScore + crystal.value;
  $("#yourScore").html(currentScore);
  checkWin();
};

//check if user won
var checkWin = function() {
  if (currentScore > targetScore) {
    alert("You LOST !");
    totalLosses++;
    $("#LossTally").html(totalLosses);
    startGame();
  } else if (currentScore < targetScore) {
    alert("CONGRATULATIONS !  YOU WIN");
    totalWins++;
    $("#WinTally").html(totalWins);
    startGame();
  }
};

// main part

startGame();
$("#blue").click(function() {
  addValues(crystal.sapphire);
});
$("#red").click(function() {
  addValues(crystal.ruby);
});
$("#green").click(function() {
  addValues(crystal.emerald);
});
$("#silver").click(function() {
  addValues(crystal.diamond);
});
