// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });




// Add event listeners to all questions elements
const questionBtn = document.getElementsByClassName("question");
questionBtn.addEventListener("click", handleClick);
console.log({ questionBtn });


window.addEventListener("load", function () {
    // Get references to the notification and buttons in the round 1 html
    let guessButton = document.getElementById("guess-button");
    let passButton = document.getElementById("pass-button");
    let nextRoundButton = document.getElementById("next-round-button");

    // Display the notification for player 1's turn
    notification.textContent = "It's Player 1's turn to choose.";

    // Disable the buttons
    guessButton.disabled = true;
    passButton.disabled = true;
    nextRoundButton.disabled = true;
});


// Add event listeners to all card elements

populateCategory("card", ".nature", nature);
populateCategory("card", ".animal", animal);
populateCategory("card", ".computers", computers);
populateCategory("card", ".mythology", mythology);
populateCategory("card", ".history", history);
populateCategory("card", ".general", general);

let nature = placeholderQuestions
    .filter((category) => category.category === "Nature")
    .slice(5);

function populateCategory(
    elementCardId,
    elementQuestionClass,
    categoryFilteredArray
) {
    let elementCard = document.getElementById(elementCardId);

    let card = categoryFilteredArray[0].category;
    elementCard.textContent = card;

    let questions = document.querySelectorAll(elementQuestionClass);
    questions.forEach((question, index) => {
        question.innerHTML = categoryFilteredArray[index].question;
    });
}

let natureAnswers = document.querySelectorAll('.answer.nature');
console.log(natureAnswers);


for (let i = 0; i < natureAnswers.length; i++) {
    natureAnswers[i].addEventListener('click', () => {
        let answer = natureAnswers[i].value.toLowerCase();
        let actualAnswer = nature[i].answer.toLocaleLowerCase();
        if (answer === actualAnswer) {
            natureAnswers[i].classList.add("correct");
        } else {
            console.log("it's not correct");
        }
    });
}

let passButton = document.getElementById("pass-button");
let notification = document.getElementById("notification");

passButton.addEventListener("click", function () {
    currentPlayer = 2;
    notification.textContent = "Next, Player 2's turn";
});

// Get the player's answer from some input field
let playerAnswer = document.getElementById('search-answer').value;

// Check if the answer is correct
if (playerAnswer === getQuestion.answer) {
    // Award the player points
    scoreBoard[currentPlayer.name] += getQuestion.points;

    // Blank out the question card
    questionCard.innerHTML = '';

    // Update the notification area
    notification.textContent = `${currentPlayer.name}'s turn`;
} else {
    // Incorrect answer handling
}

// let's say firstPlayer is the player who attempted the answer
// let's say secondPlayer is the player who will get the next turn

if (answerIsIncorrect) {
    firstPlayer.score -= pointTotal;

    // swap current player with other player
    let temp = firstPlayer;
    firstPlayer = secondPlayer;
    secondPlayer = temp;

    // show notification that other player's turn has begun
    showNotification(`It's ${secondPlayer.name}'s turn to answer.`);

    if (secondPlayerAttemptsAnswer()) {
        // if the other player guesses correctly
        secondPlayer.score += pointTotal;
        blankOutCard();
        showNotification(`Correct answer by ${secondPlayer.name}.`);
    } else {
        // if the other player also guesses incorrectly
        showNotification(`No one guessed correctly. Choosing a new question.`);
        getNewQuestion(firstPlayer);
    }
}

function newScore(player1Score, player2Score) {
    document.getElementById("player1Score").innerHTML = player1Score;
    document.getElementById("player2Score").innerHTML = player2Score;
}

// award points to player 1
player1Score += pointTotal;
newScore(player1Score, player2Score);

// subtract points from player 2
player2Score -= pointTotal;
newScore(player1Score, player2Score);

// select a new card for the question
if (selectedCard) {
    displayAlert("You cannot pick a new card until you answer or pass the current question.");
}

// Get the "Round 2" button element
let nextRoundButton = document.getElementById('next-round-button');

// Set initial score values for players 1 and 2
let player1Score = 0;
let player2Score = 0;

// Check if a player has won or if the board has been cleared

function checkWinConditions() {
    if (player1Score >= 15000 || player2Score >= 15000 || boardIsCleared()) {
        // Display a message to alert players to move on to Round 2
        alert("Congratulations, you are doing great. It's time to move on to Round 2!");

        // Enable the "Round 2" button
        nextRoundButton.disabled = false;

        // Pass score information to the Round 2 page using query parameters
        let urlParams = new URLSearchParams();
        urlParams.set('player1Score', player1Score);
        urlParams.set('player2Score', player2Score);
        const queryString = urlParams.toString();
        const round2Url = `round2.html?${queryString}`;

        // Navigate to the Round 2 page
        window.location.href = round2Url;
    }
}

// Check the win conditions whenever the score is updated
function updateScore(player, points) {
    if (player === 1) {
        player1Score += points;
    } else if (player === 2) {
        player2Score += points;
    }

    // Update the score display on the page
    updateScoreDisplay(player1Score, player2Score);

    // Check if either player has won or if the board has been cleared
    checkWinConditions();
}

// Get the score display elements for both players
const player1ScoreDisplay = document.getElementById('player1Score');
const player2ScoreDisplay = document.getElementById('player2Score');

// Update the score display on the page
function updateScoreDisplay(player1Score, player2Score) {
    player1ScoreDisplay.textContent = `Player 1 Score: ${player1Score}`;
    player2ScoreDisplay.textContent = `Player 2 Score: ${player2Score}`;
}

// Determine if the board has been cleared
function boardIsCleared() {
    let boardCleared = true;
    board.forEach((row) => {
        row.forEach((card) => {
            if (card.question !== "") {
                boardCleared = false;
            }
        });
    });
    return boardCleared;
}

