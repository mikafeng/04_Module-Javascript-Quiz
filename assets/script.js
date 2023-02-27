var timeEl = document.getElementById("countDown");
var timeLeft = 30;

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