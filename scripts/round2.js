// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// Set initial score values for players 1 and 2
// Get scores from query parameters
const urlParams = new URLSearchParams(window.location.search);
const player1Score = parseInt(urlParams.get('player1Score'));
const player2Score = parseInt(urlParams.get('player2Score'));

if (currentPage === 'Round 2') {
    // Behavior is the same as Round 1
    // Scores are the same as they were at the end of Round 1

    // Disable Final Round button
    finalRoundButton.disabled = true;
}

// Define global variables
let playerScores = [0, 0]; // Initialize scores for both players to 0
let currentRound = 1;
const maxRound1 = 15000;
const maxRound2 = 30000;

// Function to check if a player has won the game
function checkWinConditions() {
    if (playerScores[0] >= maxRound1 || playerScores[1] >= maxRound2) {
        alert("Move on to the Final Round!");
        document.getElementById("final-round-button").disabled = false;
    }
}

// Function to handle the end of a round
function endRound() {
    // Check if a player has won the round or if the board is cleared
    if (playerScores[0] >= maxRound1 || playerScores[1] >= maxRound1 || boardCleared()) {
        // Disable the "Round 2" button and enable the "Final Round" button
        document.getElementById("next-round-button").disabled = true;
        document.getElementById("final-round-button").disabled = false;
    }
}

// Function to handle the final round
function handleFinalRound() {
    // Show the category and prompt players to make a wager
    document.getElementById("game-board").innerHTML = getRandomCategory();
    document.getElementById("wager-prompt").style.display = "block";
}

// Event listener for when a player's score changes
document.addEventListener("scoreChange", () => {
    checkWinConditions(); // Check if a player has won the game
    endRound(); // Check if a player has won the round or if the board is cleared
});

// Event listener for when the "Final Round" button is clicked
document.getElementById("final-round-button").addEventListener("click", handleFinalRound);
