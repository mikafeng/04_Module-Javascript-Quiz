//clickevent for start button
//timer doesn't start until clickevent
//array of questions

//TIMER COUNTDOWN
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quiz");
var timeEl = document.getElementById("countDown");
var results = document.getElementById("results");
var progressEl = document.getElementById("progress");
var questionEl = document.getElementById("questions");
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
    for (i = 0; i < answersEl.children.length; i++) {
        answersEl.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQIndex].choices[i]}`;
    }
}
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

function evaluate(){
    if (correct === true) {
        button.style
    }
}
//QUESTIONS array
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: false }
        ],
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "answers": [
            { text: "<script href='xxx.js'>", correct: false},
            { text: "<script name='xxx.js'>", correct: true},
            { text: "<script src='xxx.js'>", correct: false}
        ],
    
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        "answers": [
            { tet: "msgBox('Hello World');", correct: true },
            { text :"alertBox('Hello World');", correct: false}, 
            { text :"alert('Hello World');", correct: false}
        ],
    }
];

// let quiz = new Quiz(questions);

//display questions
// displayQuestion();


