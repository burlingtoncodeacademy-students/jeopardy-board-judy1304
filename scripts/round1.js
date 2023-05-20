// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// HTML references 
const guessButton = document.getElementById('guess-button');
const passButton = document.getElementById('pass-button');
const notification = document.getElementById('notification');
const question = document.getElementById('question-display');
const scoreDisplay = document.getElementById('score-display');
const gameBoard = document.getElementById('game-board');

// This is for keeping track of the current player and score
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

// Initialize the game board with placeholder questions
let board = [];
const natureQuestion = document.querySelector('.question.nature');

// Function to handle question selection
function questionDisplay(categoryIndex, questionIndex) {
    const selectedQuestion = gameBoard[categoryIndex].question[questionIndex];
    question.textContent = `Question: ${selectedQuestion}`;
    // Update to enable guess and pass buttons
    guessButton.disabled = false;
    passButton.disabled = false;
    // Update to display the current player's turn
    notification.textContent = `Player ${currentPlayer}'s turn to answer`;
}

// Event listener for the game board cells
gameBoard.addEventListener('click', (event) => {
    const cell = event.target;
    const categoryIndex = cell.dataset.category;
    const questionIndex = cell.dataset.question;

    // Check if the clicked cell has a question

    if (gameBoard[categoryIndex].question[questionIndex]) {
        // Display the question
        questionDisplay(categoryIndex, questionIndex);
    }
});

// Event listener for the guess button
guessButton.addEventListener('click', () => {
    const answer = prompt('Enter your answer:');
    submitAnswer(answer);
});

// Event listener for the pass button
passButton.addEventListener('click', () => {
    passQuestion();
});


// Function to handle submitting an answer
function submitAnswer(answer) {
    const isAnswerCorrect = checkAnswer(answer);
    if (isAnswerCorrect) {
        // Award points to the current player
        const questionValue = parseInt(question.textContent.split(':')[1].trim());
        if (currentPlayer === 1) {
            player1Score += questionValue;
        } else {
            player2Score += questionValue;
        }
        updateScore();
        // Clear the question display
        question.textContent = '';
        // Disable guess and pass buttons
        guessButton.disabled = true;
        passButton.disabled = true;
        // Display the next player's turn
        notification.textContent = `Player ${currentPlayer}'s turn to choose`;
    } else {
        // Handle incorrect answer logic
        const questionValue = parseInt(question.textContent.split(':')[1].trim());
        if (currentPlayer === 1) {
            player1Score -= questionValue;
        } else {
            player2Score -= questionValue;
        }
        updateScore();
        // Switch to the next player's turn
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        // Update to display the current player's turn
        notification.textContent = `Player ${currentPlayer}'s turn to answer`;
    }
}

// Function to handle passing a question
function passQuestion() {
    // Switch to the next player's turn
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    // Update the UI to display the current player's turn
    notification.textContent = `Player ${currentPlayer}'s turn to answer`;
}

// Function to check if the answer is correct
function checkAnswer(answer, questionElement) {
    const selectedQuestion = questionElement.textContent.split(':')[1].trim();
    const isAnswerCorrect = answer.toLowerCase() === selectedQuestion.toLowerCase();
    return isAnswerCorrect;

}

// Function to update the score display on the page
function updateScore() {
    scoreDisplay.textContent = `Player 1: ${player1Score} | Player 2: ${player2Score}`;

}


