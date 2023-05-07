var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
userClickedPattern = [];
var restart = false;
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  $("#" + randomColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomColor);
  level++;
  $("h1").text("Level " + level);
  console.log(gamePattern);
}

$(".btn").click(function () {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
  console.log(userClickedPattern);
});

function playSound(name) {
  var audioToPlay = "sounds/" + name + ".mp3";
  new Audio(audioToPlay).play();
}

function animatePress(color) {
  $("#" + color)
    .addClass("pressed")
    .delay(100)
    .queue(function (next) {
      $(this).removeClass("pressed");
      next();
    });
}

$(document).keydown(function () {
  if (!restart) {
    nextSequence();
    restart = true;
  }
});

function checkAnswer(index) {
  if (gamePattern[index] != userClickedPattern[index]) {
    new Audio("sounds/wrong.mp3").play();
    $("body")
      .addClass("game-over")
      .delay(200)
      .queue(function (next) {
        $(this).removeClass("game-over");
        next();
      });
    $("h1").text("Game over, Press Any Key to Restart");
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    restart = false;
  } else if (index + 1 == level) {
    setTimeout(1000);
    userClickedPattern = [];
    nextSequence();
  }
}
