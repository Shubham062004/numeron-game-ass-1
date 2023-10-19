// Iteration 5: Store the player score and display it on the game over screen
var totalScore = document.getElementById("score-board");

totalScore.textContent = localStorage.getItem("score");

var playAgainButton = document.getElementById("play-again-button")

playAgainButton.addEventListener("click", e=>{
    location.href="./game.html"
})