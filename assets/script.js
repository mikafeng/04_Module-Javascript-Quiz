//clickevent for start button
//timer doesn't start until clickevent
//array of questions

//TIMER COUNTDOWN
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quiz");
var timeEl = document.getElementById("countDown");
var showResults = document.getElementById("results");
var progressEl = document.getElementById("progress");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("option");

var timeLeft = 60;


//Question Variables
var questionCount = 0;
var score = 0;


startBtn.addEventListener("click", startQuiz)

function startQuiz () {
    startBtn.classList.add('hidden');
    progressEl.classList.remove('hidden');
    questionEl.classList.remove('hidden');
    choicesEl.classList.remove('hidden');
    questionCount = 0;
    score = 0;
    questions = [...questions];
    console.log(questions);
    countDown();
};

function countDown(){

    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left!";
    
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        displayMessage("time out");
        }   
}, 1000)};



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
let questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript??",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "answer": 1
    },
    {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script name='xxx.js'>",
        "choice3": "<script src='xxx.js'>",
        "answer": 3
    },
    {
        "question": " How do you write 'Hello World' in an alert box?",
        "choice1": "msgBox('Hello World');",
        "choice2": "alertBox('Hello World');",
        "choice3": "alert('Hello World');",
        "answer": 3
    }
]

// let quiz = new Quiz(questions);

//display questions
// displayQuestion();


