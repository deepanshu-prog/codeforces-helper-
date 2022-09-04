var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var started=false;
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1)
});

function nextSequence() {
  userClickedPattern=[];
  var randomNumber = Math.floor(4 * Math.random());

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeTo(150, 0);
  $("#" + randomChosenColour).fadeTo(150, 1);
  playsound(randomChosenColour);
  level=level+1;
$("h1").text("Level "+level);

  }
  function playsound(name){
    var audio = new Audio("sounds/" + name+".mp3");
      audio.play();
  }

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

var level=0;
$(document).keydown(function(){
  if(!started){

    nextSequence();


    $("h1").text("Level "+level);
    started=true;
  }

});
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
  {

    console.log("success");
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function (){nextSequence();},1000);
  }
}
  else{
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over")},200);
      var song=new Audio('sounds/wrong.mp3');
      song.play();
      $("h1").text("Game Over, Press Any Key to Restart");
    console.log("wrong");
  }

}
function startover(){gamePattern = [];
  userClickedPattern=[];
  
}
