//clickevent for start button
//timer doesn't start until clickevent
var startQuiz = document.getElementById("startQuiz");
var timeEl = document.getElementById("countDown");
var timeLeft = 30;


startQuiz.addEventListener("click", function(){
//make 30 secs in min.sec format and change to start time 3min00sec
function countDown(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft + " left!";
    
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        displayMessage();
        }   
}, 1000)};
countDown();
});

//tried to add countDown function w/in button click for startQuiz
//works but only one click...not sure if this is best way.

//need function displayMessage for going to page of entering highscore
//located in activities 9 and 10