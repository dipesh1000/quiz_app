const timerElement = document.getElementById('timeLeft');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');

// Question bank
const questions = [
  {
    question: 'Which type of cuisine is known for dishes like sushi and ramen?',
    options: ['Chinese', 'Italian', 'Japanese', 'Indian'],
    answer: 'Japanese',
  },
  {
    question:
      'What is the primary ingredient in a classic Caesar salad dressing?',
    options: ['Mayonnaise', 'Ranch', 'Anchovies', 'Mustard'],
    answer: 'Anchovies',
  },
  {
    question: 'Which cooking method involves submerging food in hot oil?',
    options: ['Boiling', 'Frying', 'Steaming', 'Grilling'],
    answer: 'Frying',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    options: ['Tomato', 'Avocado', 'Cucumber', 'Pepper'],
    answer: 'Avocado',
  },
  {
    question:
      'What is the term for a meal served with multiple small dishes in Japanese cuisine?',
    options: ['Dim Sum', 'Kaiseki', 'Tapas', 'Buffet'],
    answer: 'Kaiseki',
  },
  {
    question: 'Which dessert is traditionally set on fire before serving?',
    options: ['Crème Brûlée', 'Tiramisu', 'Bananas Foster', 'Pavlova'],
    answer: 'Bananas Foster',
  },
  {
    question: 'What type of pasta is shaped like small rice grains?',
    options: ['Fettuccine', 'Orzo', 'Penne', 'Macaroni'],
    answer: 'Orzo',
  },
  {
    question: 'Which popular drink is made from fermented grapes?',
    options: ['Whiskey', 'Wine', 'Beer', 'Vodka'],
    answer: 'Wine',
  },
  {
    question: 'What is the term for meat cooked slowly in its own juices?',
    options: ['Broiling', 'Braising', 'Roasting', 'Grilling'],
    answer: 'Braising',
  },
  {
    question: 'Which herb is commonly used in pesto sauce?',
    options: ['Cilantro', 'Basil', 'Parsley', 'Thyme'],
    answer: 'Basil',
  },
];

let index = 0;
let score = 0;
let timmerLeft = 15;
let timmer;

function starTimmer() {
  timmer = setInterval(() => {
    timmerLeft--;
    timerElement.textContent = timmerLeft;
    if (timmerLeft === 0) {
      clearInterval(timmer);
      alert('Times Up');
    }
  }, 1000);
}

function changeProgressBar() {
  progressElement.style.width = `${index * 10}%`;
}

function endQuiz() {
  questionElement.textContent = 'Quiz Over';
  optionsElement.innerHTML = '';
  timerElement.textContent = '';
  scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
}

function moveToNextQuestion() {
  clearInterval(timmer);
  index++;
  if (index < questions.length) {
    timmerLeft = 15;
    startQuiz();
  } else {
    endQuiz();
  }
}

function handleAnswer(selectedAnswer) {
  if (selectedAnswer === questions[index].answer) {
    score++;
  }
  moveToNextQuestion();
  changeProgressBar();
}

function displayCurrentQuestion() {
  questionElement.innerHTML = '';
  const currentQuestion = document.createElement('h4');
  currentQuestion.textContent = questions[index].question;
  questionElement.appendChild(currentQuestion);

  optionsElement.innerHTML = '';
  questions[index].options.forEach((option) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = option;
    buttonElement.addEventListener('click', () => {
      handleAnswer(option);
    });
    optionsElement.appendChild(buttonElement);
  });
  scoreElement.textContent = `Score: ${score}`;
}

function startQuiz() {
  displayCurrentQuestion();
  starTimmer();
}
startQuiz();
