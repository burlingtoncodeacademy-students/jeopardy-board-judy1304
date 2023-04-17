// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });


// Fetch placeholder questions from an external source
let fetchPlaceholderQuestions = async () => {
    try {
        // Use fetch to make a GET request to the API endpoint
        let response = await fetch("./placeholder-questions.js");
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Error fetching questions');
        }

        // Parse the response into JSON
        let questions = await response.json();

        // Do whatever you need to do with the questions data
        let allQuestions = allQuestions.results;
        displayQuestions(allQuestions);
        console.log(allQuestions.results[0].category);
        questions.push(questions.value);
        clearDisplay();
        displayQuestions();

    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error(error);
    }
};



// Populate game board with fetched questions and answers
function displayQuestions(categoriesToDisplay) {
    for (let i = 0; i < categories.length; i++) {
        let gameBoardDisplay = document.getElementById('game-board');
        categoriesToDisplay.forEach((category) => {
            console.log(category);
            // let pTag = document.createElement("p");
            // pTag.textContent = category.name;
            // gameBoardDisplay.appendChild(pTag);
        });
    }
}


for (let j = 0; j < answer.length; j++) {
    let answerDiv = document.getElementById('div');
    answerDiv.forEach((answer) => {
        answerDiv.textContent = answer[i];
        console.log(answer);
    })

    // gameBoardDisplay.appendChild(answerDiv);

}



// Add event listeners to handle user interactions
const questionTiles = document.getElementsByClassName('question');
for (let i = 0; i < questionTiles.length; i++) {
    questionTiles[i].addEventListener('click', () => {

    });
}



let getNature = placeholderQuestions.filter((cat) => cat.category === "Nature").slice(5);

console.log(getNature.length);

let NatureList = document.getElementById("nature-list");
let question = placeholderQuestions[0].category;
NatureList.textContent = question;

let questions = document.querySelectorAll(".nature");

questions.forEach((button, index) => {
    // Console Log Item
    button.innerHTML = `${placeholderQuestions[index].question} 
    <button id="guessButton" class="guess" type="button${question
            .split(" ")
            .join("-")
            .toLowerCase()} "/>`;
});


let natureAnswers = document.querySelectorAll(".answer-nature");
console.log(natureAnswers);

for (let i = 0; i < natureAnswers.length; i++) {
    natureAnswers[i].addEventListener("click", () => {
        let answer = natureAnswers[i].value.toLowerCase();
        let actualAnswer = nature[i].answer.toLowerCase();
        if (answer == actualAnswer) {
        } else {
            console.log("it's incorrect");
        }
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}