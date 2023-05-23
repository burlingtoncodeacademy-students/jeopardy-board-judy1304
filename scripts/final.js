let maxPoints = 3000;

// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });


// function to generate a random category
function generateCategory() {
    const categories = ["History", "General", "Animals", "Mythology", "Computers", "Nature"];
    const index = Math.floor(Math.random() * categories.length);
    return categories[index];
}

// when the Final Round page loads
function FinalRound() {
    const category = generateCategory();
    const categoryElement = document.getElementById("category");
    const wagerElement = document.getElementById("wager");

    // display the category on the page
    categoryElement.textContent = `Category: ${category}`;

    // prompt the player to make a wager up to their maximum point total
    wagerElement.textContent = `Make a wager up to ${maxPoints}`;

    // enable the "Submit Wager" button
    const submitWager = document.getElementById("submit-wager");
    submitWager.disabled = false;
}

// when the player submits their wager
function submitWager() {
    const wagerElement = document.getElementById("wager");
    const wagerInput = document.getElementById("wager-input").value;

    // check if the wager is valid
    if (isNaN(wagerInput) || wagerInput < 0 || wagerInput > maxPoints) {
        wagerElement.textContent = `Invalid wager. Make a wager up to ${maxPoints}`;
        return;
    }

    // store the player's wager
    const playerWager = parseInt(wagerInput);
    // disable the "Submit Wager" button
    const submitWager = document.getElementById("submit-wager");
    submitWager.disabled = true;

    // start the final round with the chosen category and wager
    FinalRound(category, playerWager);
}

// Get the elements needed for the final round
const categoryElement = document.getElementById('category');
const submitWagerBtn = document.getElementById('submit-wager');
const questionElement = document.getElementById('question');
const submitAnswerBtn = document.getElementById('submit-answer');

// Show the category to the players
categoryElement.innerText = "Category: ${category}";

// When both players have made their wagers, show the question
submitWagerBtn.addEventListener('click', () => {
    const player1Wager = parseInt(document.getElementById('player1-wager').value);
    const player2Wager = parseInt(document.getElementById('player2-wager').value);

    // Check if both players have made their wagers
    if (!isNaN(player1Wager) && !isNaN(player2Wager)) {
        // Enable the answer submission button
        submitAnswerBtn.disabled = false;

        // Show the question to the players
        questionElement.innerText = "./placeholder-questions.js";
    }
});

// When a player submits their answer, disable the answer submission button
submitAnswerBtn.addEventListener('click', () => {
    submitAnswerBtn.disabled = true;

    // Check if the answer is correct
    const answer = document.getElementById('search-answer').value;
    if (answer.toLowerCase() === " ") {
        // Let the players that the answer is correct and add the wagered amount to the player's score
        alert("Correct!");
    } else {
        // Let the players that the answer is incorrect and subtract the wagered amount from the player's score
        alert("Incorrect.");
    }
})


// Store the maximum wager for each player
let maxWager = {
    player1: player1Score,
    player2: player2Score
};

// Randomly select a category for the final round
let finalRoundCategory = categories[Math.floor(Math.random() * categories.length)];

// Display the category and prompt each player to make a wager
displayFinalRoundPrompt(finalRoundCategory, maxWager);

// Store the wagers for each player
let player1Wager = 0;
let player2Wager = 0;

// Listen for wagers from each player
listenForWagers((player, wager) => {
    if (player === "player1") {
        player1Wager = wager;
    } else if (player === "player2") {
        player2Wager = wager;
    }

    // Check if both players have submitted their wagers
    if (player1Wager !== 0 && player2Wager !== 0) {
        // Both wagers have been submitted, reveal the final question
        let finalQuestion = getFinalQuestion(finalRoundCategory);
        displayFinalQuestion(finalQuestion);

        // Listen for answers from each player
        listenForAnswers((player, answer) => {
            // Check if the answer is correct
            let isCorrect = checkFinalAnswer(finalQuestion, answer);

            // Update the scores based on the wagers and correctness of the answer
            if (isCorrect) {
                player1Score += player1Wager;
                player2Score += player2Wager;
            } else {
                player1Score -= player1Wager;
                player2Score -= player2Wager;
            }

            // Display the updated scores and notify the players of the winner
            displayFinalScore(player1Score, player2Score);
            notifyWinner(getWinner(player1Score, player2Score));
        });
    }
});

