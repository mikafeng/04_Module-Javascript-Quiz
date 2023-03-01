//clickevent for start button
//timer doesn't start until clickevent
//array of questions

//TIMER COUNTDOWN
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quiz");
var timeEl = document.getElementById("countDown");
var results = document.getElementById("results");
var progressEl = document.getElementById("progress");
var questionEl = document.getElementById("question");
// var choicesEl = document.getElementById("option");
var answersEl = document.getElementById("answers")
var currentQIndex;

var timeLeft = 60;


//Question Variables
var questionCount = 0;
var score = 0;

//FUNCTION hide element
function hide(element) {
    element.style.display = "none";
}

//FUNCTION display element
function show(element) {
    element.style.display = "block";
}

//startBTN Event Listener
startBtn.addEventListener("click", function(){
    startQuiz();
    hide(startBtn);
    show(progress);
    show(questionEl);
    show(answers);
    show(results);
});

//FUNCTION quiz starts
function startQuiz () {
    questionCount = 0;
    score = 0;
    currentQIndex = 0;
    renderQs();
    // questions = [...questions];
    // console.log(questions);
    countDown();
};

//FUNCTION render question
function renderQs() {
    showQ(questions[currentQIndex]);
    // for(let i=0; i<questions.length; i++) {
    //     console.log(questions[i]);
    // }
};

function showQ(question) {
    questionEl.innerText = question.question
};

//FUNCTION timer starts
function countDown(){

    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left!";
    
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        displayMessage("quiz over");
        }   
}, 1000)};



// renderQs();

// function guess(id, guess) {
//     let button = document.getElementById(id);
//     button.onclick = function () {
//         quiz.guess(guess);
//         displayQuestion();
//     }
// };

// show progress
// function showProgress() {
//     let currentQuestionNumber = quiz.questionIndex + 1;
//     let progressEl = document.getElementById("progress");
//     progressEl.innerHTML = `Question ${currentQuestionNumber} of ${quiz.question.length}`;
// };

//show score

//create quiz questions
//QUESTIONS array
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choices: ["<script>", "<javascript>", "<js>"],
        answer: 1
    },
    {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choices": ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>"],
        "answer": 2
    },
    {
        "question": " How do you write 'Hello World' in an alert box?",
        "choices": ["msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
        "answer": 0
    }
];

// let quiz = new Quiz(questions);

//display questions
// displayQuestion();


