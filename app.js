
const createForm = document.getElementById("create-form");
const puzzleList = document.getElementById("puzzle-list");
const titleInput = document.getElementById("puzzle-title");
const questionInput = document.getElementById("puzzle-question");
const answerInput = document.getElementById("puzzle-answer");
const message = document.getElementById("form-message");

// Store puzzles temporarily in the browser
let puzzles = [
  {
    title: "The First Mystery",
    question: "I have keys but no locks. I have space but no room. What am I?",
    answer: "keyboard"
  }
];

// Display puzzles on the webpage
function displayPuzzles() {
  puzzleList.innerHTML = "";

  puzzles.forEach((puzzle, index) => {
    const card = document.createElement("article");
    card.className = "puzzle-card";

    const title = document.createElement("h3");
    title.textContent = puzzle.title;

    const question = document.createElement("p");
    question.textContent = puzzle.question;

    const answerInput = document.createElement("input");
    answerInput.type = "text";
    answerInput.placeholder = "Enter your answer";

    const solveButton = document.createElement("button");
    solveButton.textContent = "Check Answer";

    const result = document.createElement("p");
    result.setAttribute("aria-live", "polite");

    solveButton.addEventListener("click", () => {
      if (answerInput.value.trim() === "") {
        result.textContent = "Please enter an answer.";
        return;
      }

      if (
        answerInput.value.trim().toLowerCase() ===
        puzzle.answer.toLowerCase()
      ) {
        result.textContent = "Correct! Mystery solved!";
      } else {
        result.textContent = "Not quite! Try again.";
      }
    });

    card.append(title, question, answerInput, solveButton, result);
    puzzleList.appendChild(card);
  });
}

// Create a new puzzle
if (createForm) {
  createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (!title || !question || !answer) {
      message.textContent = "Please fill in all fields.";
      return;
    }

    puzzles.push({ title, question, answer });

    displayPuzzles();
    createForm.reset();
    message.textContent = "Puzzle created successfully!";
  });
}

// Show the initial puzzle
displayPuzzles();
