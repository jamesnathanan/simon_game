const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function (evt) { 
    //console.log(evt.key);
    if (!started) {
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});


function nextSequence() {
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);

}

function playSound(name) {
    $("#"+name).fadeIn(100).fadeOut(100).fadeOut(100);
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#"+ currentColour).addClass("pressed")
    setTimeout(function() {
        $("#"+ currentColour).removeClass("pressed");
    }, 100)
}