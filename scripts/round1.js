// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });


// this is for fishing 5 questions for each categories import from placeholders
let getNature = placeholderQuestions.filter((cat) => cat.category === "Nature").slice(5);
let getAnimals = placeholderQuestions.filter((cat) => cat.category === "Animals").slice(5);
let getComputers = placeholderQuestions.filter((cat) => cat.category === "Computers").slice(5);
let getMythology = placeholderQuestions.filter((cat) => cat.category === "Mythology").slice(5);
let getHistory = placeholderQuestions.filter((cat) => cat.category === "History").slice(5);
let getGeneral = placeholderQuestions.filter((cat) => cat.category === "General").slice(5);

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

function popModal(questionData, index) {
    if (questionData.questionList.contains("chosen")) {
        alert("Sorry, please choose another question.")
        return;
    }

    questionData.questionList.add("chosen");
    questionData.style.color = "#wine"

    gameQuestionObject = newObject(question, index)
    console.log(gameQuestionObject);

    document.querySelector(".game-question-pop").textContent = gameQuestionObject.question;

    document.querySelector(".player-turn-modal").textContent = gameQuestionObject.playerTurn;

    Modal.style.display = "table";

    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";


}







