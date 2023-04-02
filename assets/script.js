//clickevent for start button
//timer doesn't start until clickevent
//array of questions

//TIMER COUNTDOWN
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quiz");
var timeEl = document.getElementById("countDown");
var results = document.getElementById("results");
var progressEl = document.getElementById("progress");
var questionEl = document.getElementById("questionPrompt");
var choicesEl = document.getElementById("choices");
var answerEl = document.getElementById("answer");
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
    // questions = [...questions];
    renderQs();
    // console.log(questions);
    countDown();

};


//FUNCTION render question
// function renderQs() {
//     showQ(questions[currentQIndex]);
    // for (i=0; i<answersEl.children.length; i++){
    //     console.log(answers.children[i]);
    // }

// };

// function showQ(question) {
//     questionEl.innerText = question.question
//     question.answers.forEach(answer => {
//         var button = document.createElement('button')
//         button.innerText = answer.text;
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answersEl.appendChild(button)
//     })
// };

function selectAnswer(e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove('hide')
//         console.log('this button got clicked')
//     } else {
//         startButton.innerText = 'Restart'
//         startButton.classList.remove('hide')
//         console.log('what?')
//     }
}

// function showChoices(answers){
//     questionEl.innerText = question.choices;
// }
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



function renderQs() {
    questions.textContent = questions[currentQIndex].question;
    choiceA.textContent = questions[currentQIndex].choices[0];
    choiceB.textContent = questions[currentQIndex].choices[1];
    choiceC.textContent = questions[currentQIndex].choices[2];
}

renderQs();

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

function evaluate(){
    if (correct === true) {
        button.style
    }
}
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

// let quiz = new Quiz(questions);

//display questions
// displayQuestion();


//event listeners
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
