const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
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