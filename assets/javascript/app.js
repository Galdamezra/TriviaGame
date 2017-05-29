//GLOBAL variables
//========================================

//Score variables
var correctScore    = 0;
var incorrectScore  = 0;
var unansweredScore = 0;

//Functions
//========================================

//Timer start on click

$("#startbutton").click(start);

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



var startGame = function(){

  //Reset Current Score
  var correctScore    = 0;
  var incorrectScore  = 0;
  var unansweredScore = 0;

  //Testing

};

//MAIN PROCESS
//========================================

//click function for Start button
$("#startbutton").click(function(){
  alert("test")
});
