// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

const questionModal = document.getElementById('questionModal');
const questionDisplay = document.getElementById('questionDisplay');
const closeModal = document.getElementById('closeModal');
const answerButton = document.getElementById('answerButton');


// Select the first 5 questions from the nature category
const nature = placeholderQuestions.filter((category) => category.category === "Nature")
    .slice(5);

// Display the nature questions
nature.forEach((question, index) => {
    console.log(`Question ${placeholderQuestions[index]}: ${question.question}`);
});

const gameBoardElements = document.querySelectorAll('.question-nature');
gameBoardElements.forEach((element) => {
    element.addEventListener('click', showQuestionModal);
});

closeModal.addEventListener('click', () => {
    questionModal.style.display = 'none';
});

answerButton.addEventListener('click', () => {
    const answer = prompt('Enter your answer:');
    submitAnswer(answer);
});

function showQuestionModal() {
    // Get the value of the clicked element, e.g., $200
    const elementValue = this.textContent;
    // Find the corresponding question in the placeholderQuestions array
    const selectedQuestion = placeholderQuestions.find(
        (question) => question.value === elementValue
    );
    // Update the question display in the modal
    questionDisplay.textContent = `Question: ${selectedQuestion.question}`;
    // Show the question modal
    questionModal.style.display = 'block';
}

let selectedQuestion = ' ';
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

// Function to handle submitting an answer
function checkAnswer(answer) {
    const isAnswerCorrect = answer.toLowerCase() === selectedQuestion.toLowerCase();
    return isAnswerCorrect;
}

// Function to handle passing a question
function passQuestion() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    notification.textContent = `Player ${currentPlayer}'s turn to answer`;
}

// Function to update the score display on the page
function updateScore() {
    scoreDisplay.textContent = `Player 1: ${player1Score} | Player 2: ${player2Score}`;
}

const player1Answer = '';
if (checkAnswer(player1Answer)) {
    player1Score++;
    updateScore();
} else {
    passQuestion();
}
