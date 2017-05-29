//GLOBAL variables
//========================================

//Score variables
var correctScore    = 0;
var incorrectScore  = 0;

//Functions
//========================================

//Timer start on click
window.onload = function() {
  $("#startbutton").click(stopwatch.start);

};

//variable will hold our setInterval that runs the watch
var intervalId;

////prevents the clock from being sped up unnecessarily
var clockRunning = false;

//Stopwatch object
var stopwatch = {
  time: 120,

  start: function() {

    //USe setInterval tp start the count and set the clock to running
    if(!clockRunning) {
      counter = setInterval(stopwatch.count, 1000);

    }

  },
  stop: function() {

    //  Stop the counter at 00:00 and alert game over
    if(--time < 0) {

      alert("GAME OVER!");
      clearInterval(counter);

    }

  },
  count: function() {

    //decrease time by 1
    stopwatch.time--

    //get current time, pass into stop.timeConverter, abd save result in variable

    var converted = stopwatch.timeConverter(stopwatch.time);

    //variable to show converted time into timer div
    $("#timer").html(converted);
  },
  //timeConverter function, referenced form HW

  timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

};



//Check if user won or lost
//Check if user won or lost and reset the game
var checkWin = function() {

  //Check if currentScore is larger than targetScore
  if(incorrectScore > correctScore) {
    alert("Sorry. You Lost!");
    console.log("you lost");

    //Restart game
    startGame();

  }

  else if(correctScore > incorrectScore) {
    alert("Congratulation! You Won!");
    console.log("You Won!");

    //Restart game
    startGame();

  }

}


//Start Game function
var startGame = function(){

  //Reset Current Score
  var correctScore    = 0;
  var incorrectScore  = 0;

  //if statement to define scores for each Questions

  //change hTML to reflect score changes
  $("#score").html('<h3> Correct Score: ' + correctScore + '</h3><br><h3>Incorrect Score: ' + incorrectScore + '</h3>');


  //Testing

};

//Respond to clicks
var addValues = function (correctScore) {

  // Change the HTML to reflect changes in currentScore
  $("#score").html(correctScore);

  //call the checkWin function
  checkWin();

  //Testing console
  console.log("Correct Score: " + correctScore);

}

//Respond to clicks
var addValues = function (incorrectScore) {

  // Change the HTML to reflect changes in currentScore
  $("#score").html(incorrectScore);

  //call the checkWin function
  checkWin();

  //Testing console
  console.log("Incorrect Score: " + incorrectScore);

}

//MAIN PROCESS
//========================================

startGame();

$("#question1false").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question1true").click(function() {
  incorrectScore++
  console.log(correctScore)
});

$("#question2true").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question2false").click(function() {
  incorrectScore++
  console.log(correctScore)
});

$("#question3false").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question3true").click(function() {
  incorrectScore++
  console.log(correctScore)
});

$("#question4false").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question4true").click(function() {
  incorrectScore++
  console.log(correctScore)
});

$("#question5true").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question5false").click(function() {
  incorrectScore++
  console.log(correctScore)
});

$("#question6true").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question6false").click(function() {
  incorrectScore++
  console.log(correctScore)
});

$("#question7true").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question7false").click(function() {
  incorrectScore++
  console.log(correctScore)
});

$("#question8true").click(function() {
  correctScore++
  console.log(correctScore)
});

$("#question8false").click(function() {
  incorrectScore++
  console.log(correctScore)
});
