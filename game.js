var userClickedPattern= [];
var gamePattern= [];
var buttonColor= [ "red", "blue", "green", "yellow" ];

var started= false;
var level= 0;

$(".btn").click(function(event){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name) {
  var audio= new Audio("sounds/"+ name + ".mp3");
  audio.play();
}

function nextSequence(){
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour= buttonColor[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  return randomChosenColour;
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

$(document).keypress(function(){
  $("#level-title").text("Level "+level);
  nextSequence();
  started= true;
});
