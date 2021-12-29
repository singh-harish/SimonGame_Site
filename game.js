var userClickedPattern= [];
var gamePattern= [];
var buttonColor= [ "red", "blue", "green", "yellow" ];

$(".btn").click(function(event){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
});


function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour= buttonColor[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


function playSound(name) {
  var audio= new Audio("sounds/"+ name + ".mp3");
  audio.play();
}

// playSound(userChosenColour);
nextSequence();
