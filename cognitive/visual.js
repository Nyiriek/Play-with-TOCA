const quizData = [
    {
        question: "10. Choose the circular image",
        a: { text: "click here to choose", img: "assets/ball.jpg" },
        b: { text: "click here to choose", img: "assets/apple.jpg" },
        correct: "a",
      },
    {
      question: "11. Which of two is a square?",
      a: { text: "click here to choose", img: "assets/rectangle.jpg" },
      b: { text: "click here to choose", img: "assets/square.jpg" },
      correct: "b",
    },
    {
        question: "12. Which animal is a fowl?",
        a: { text: "click here to choose", img: "assets/fowl.jpg" },
        b: { text: "click here to choose", img: "assets/cow.jpg" },
        correct: "a",
      },
      {
        question: "13. Which animal meows?",
        a: { text: "click here to choose", img: "assets/dog.jpg" },
        b: { text: "click here to choose", img: "assets/cat.jpg" },
        correct: "b",
      },
      {
        question: "14. Choose the fruit.",
        a: { text: "click here to choose", img: "assets/carrot.jpg" },
        b: { text: "click here to choose", img: "assets/orange.jpg" },
        correct: "b",
      },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const a_image = document.getElementById("a_image");
  const b_image = document.getElementById("b_image");
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
    a_text.innerText = currentQuizData.a.text;
    a_image.src = currentQuizData.a.img;
  
    b_text.innerText = currentQuizData.b.text;
    b_image.src = currentQuizData.b.img;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="checkAndRedirect()">Done</button>
            `;
        }
    }
});

function checkAndRedirect() {
    if (score < 5) {
        // Redirect to Space class 1 if the score is less than 5
        window.location.href = '/education/Space/space.html';
    } else {
        // Redirect to Space class 2 if the score is 5 or more
        window.location.href = '/education/Space/space2.html';
    }
}
