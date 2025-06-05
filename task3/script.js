const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "None of the above"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which tag is used to link CSS in HTML?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    answer: "<link>"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Ordinance Model",
      "Desktop Oriented Mode"
    ],
    answer: "Document Object Model"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Laravel", "Flask"],
    answer: "React"
  },
  {
    question: "Which property is used for responsive layout in CSS?",
    options: ["float", "position", "media query", "display"],
    answer: "media query"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  const q = quizData[currentQuestion];
  document.getElementById('question').innerText = q.question;

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => handleAnswer(option === q.answer, q.answer);
    answersDiv.appendChild(btn);
  });

  document.getElementById("score").innerText = "";
}

function handleAnswer(isCorrect, correctAnswer) {
  if (isCorrect) {
    alert("✅ Correct!");
    score++;
  } else {
    alert("❌ Wrong! Correct answer is: " + correctAnswer);
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    setTimeout(loadQuiz, 300);
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById('question').innerText = "🎉 Quiz Completed!";
  document.getElementById('answers').innerHTML = "";
  document.getElementById('score').innerText = `Your Score: ${score} out of ${quizData.length}`;
}

document.getElementById("jokeBtn").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data[0].setup} - ${data[0].punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Could not fetch joke.";
    });
});

// Start quiz
loadQuiz();
