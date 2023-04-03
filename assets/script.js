

//TIMER COUNTDOWN
var startBtn = document.getElementById("startBtn");
var timeEl = document.getElementById("countDown");

//Quiz Container
var quizContainer = document.getElementById("quiz");
var questionEl = document.getElementById("questionPrompt");

var choicesEl = document.getElementById("choices");
var choiceA = document.getElementById("btn-0");
var choiceB = document.getElementById("btn-1");
var choiceC = document.getElementById("btn-2");

var result = document.getElementById("checkAnswer");

//changing variables
var currentQIndex;
var timeLeft = 60;
var questionCount = 0;
var score = 0;

//quiz ends and highschores
var quizOverEl = document.getElementById("quizOver");

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
    show(questionEl);
    show(choicesEl);
    show(result);
});

//FUNCTION quiz starts
function startQuiz () {
    questionCount = 0;
    score = 0;
    currentQIndex = 0;

    countDown();
    renderQs();

};

//start timer
function countDown(){

    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left!";
    
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        displayMessage("quiz over");
        }   
}, 1000)};

//render question and choices 
function renderQs() {
    questionEl.textContent = questions[currentQIndex].question;
    choiceA.textContent = questions[currentQIndex].choices[0];
    choiceB.textContent = questions[currentQIndex].choices[1];
    choiceC.textContent = questions[currentQIndex].choices[2];
};

//check if selected answer correct or wrong
function checkAnswer(answer) {
    if (questions[currentQIndex].answer === questions[currentQIndex].choices[answer]) {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Wrong...";
    }

    currentQIndex++
    if (currentQIndex < questions.length) {
        renderQs();
    } else {
        console.log('game over')
        quizOver();
    }
};

//when click invoke function to check Answer
function chooseA(){ checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }

choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);

function quizOver(){
    hide(questionEl);
    hide(choicesEl);
    hide(result);
    show(quizOverEl);
}

//show score


//enter highscore

//get highscores


//QUESTIONS array
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [
        "a. <script>",
        "b. <javascript>",
        "c. <js>"
        ],
        answer: "a. <script>"
    },
    {
        question: "Which of the following is NOT a primitive data type?",
        choices: [
            "a. strings",
            "b. booleans",
            "c. alerts"
        ],
        answer: "c. alerts"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: [
            "a. <script href='xxx.js'>",
            "b. <script name='xxx.js'>", 
            "c. <script src='xxx.js'>"
        ],
        answer: "c. <script src='xxx.js'>"
    
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choices: [
            "a. msgBox('Hello World');",
            "b. alertBox('Hello World');",
            "c. alert('Hello World');"
        ],
        answer: "c. alert('Hello World');"
    }
];
