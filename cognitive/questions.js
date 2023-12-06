const quizData = [
    {
      question: "1.  What comes before the letter Z?",
      a: "V",
      b: "R",
      c: "Y",
      d: "W",
      correct: "c",
    },
    {
        question: "2. What comes after the letter K?        ",
        a: "M",
        b: "O",
        c: "J",
        d: "L",
        correct: "d",
      },
      {
        question: "3. What is the opposite of Boy?",
        a: "Woman",
        b: "Girl",
        c: "Man",
        d: "Mother",
        correct: "b",
      },
      {
        question: "4. What is the opposite of 'UP'?",
        a: "Down",
        b: "behind",
        c: "above",
        d: "beside",
        correct: "a",
      },
      {
        question: "5. What is 2+3",
        a: "3",
        b: "6",
        c: "5",
        d: "1",
        correct: "c",
      },
      {
        question: "6.  How many legs does a cat have?",
        a: "three",
        b: "four",
        c: "two",
        d: "one",
        correct: "b",
      },
      {
        question: "7. What do you use to brush your teeth?",
        a: "Comb",
        b: "Toothbrush",
        c: "Spoon",
        d: "Fork",
        correct: "b",
      },
      {
        question: "8. How many wheels does a bicycle have?",
        a: "3",
        b: "4",
        c: "5",
        d: "2",
        correct: "d",
      },
      {
        question: "9. Which of the animals below lives in water?",
        a: "cat",
        b: "elephant",
        c: "fish",
        d: "none",
        correct: "c",
      },

     
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
let answer;
answerElements.forEach((answerElement) => {
  if (answerElement.checked) answer = answerElement.id;
});
return answer;
};

const loadQuiz = () => {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questionElement.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
const answer = getSelected();
if (answer) {
  if (answer === quizData[currentQuiz].correct) score++;
  currentQuiz++;
  if (currentQuiz < quizData.length) loadQuiz();
  else {
    quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="redirectToNextPage()">Continue</button>
      `;
  }
}
});

function redirectToNextPage() {
  // Redirect to the next page
  window.location.href = 'visual.html';
}