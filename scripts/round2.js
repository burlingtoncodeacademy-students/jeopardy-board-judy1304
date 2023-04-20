// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// prompt("Player 1, what is your name?");
// prompt("Player 2, what is your name?");


// Get a random set of 5 questions from the imported array
let selectedQuestions = getNatureQuestions(placeholderQuestions, - 5);

// Function to get a random set of questions
function getNatureQuestions(questionsArray, numQuestions) {
    let shuffledArray = questionsArray.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numQuestions);
}

// Loop through the selected questions and display them on the page
let questionList = document.getElementById("nature-list");
selectedQuestions.forEach((question) => {
    let questionItem = document.createElement("li");
    questionItem.textContent = question.question;
    questionList.appendChild(questionItem);
});


// this is for fishing 5 questions for each categories import from placeholders
let getNature = placeholderQuestions.filter((cat) => cat.category === "Nature").slice(- 5);
let getAnimals = placeholderQuestions.filter((cat) => cat.category === "Animals").slice(- 5);
let getComputers = placeholderQuestions.filter((cat) => cat.category === "Computers").slice(- 5);
let getMythology = placeholderQuestions.filter((cat) => cat.category === "Mythology").slice(- 5);
let getHistory = placeholderQuestions.filter((cat) => cat.category === "History").slice(- 5);
let getGeneral = placeholderQuestions.filter((cat) => cat.category === "General").slice(- 5);

// a function that will grab the Nature Section
populateCategory("nature-title", "nature-list", getNature);

function populateCategory(
    elementTitleId,
    elementQuestionID,
    categoryFilteredArray
) {
    // define variables and get the DOM element 
    let elementTitle = document.getElementById(elementTitleId);
    let title = categoryFilteredArray[0].category;
    elementTitle.textContent = title;

    let questions = document.querySelectorAll(elementQuestionID);
    questions.forEach((item, index) => {
        item.innerHTML = `${categoryFilteredArray[index].question}  <input type="text" class="answer-${title
            .split(" ")
            .join("-")
            .toLowerCase()}" style="display:block"/>`;
    });
}


// this is for getting the answers from the questions based on the categories.
let getNatureAnswers = document.querySelectorAll(".answer-nature");
console.log(getNatureAnswers);

for (let i = 0; i < getNatureAnswers.length; i++) {
    getNatureAnswers[i].addEventListener("button", () => {
        let answer = getNatureAnswers[i].value.toLowerCase();
        let actualAnswer = getNature[i].answer.toLowerCase();
        if (answer == actualAnswer) {
            getNatureAnswers[i].style.backgroundColor = "darkgreen";
        } else {
            console.log("it's incorrect");
            getNatureAnswers[i].style.backgroundColor = "red";
        }
    });
}





