# 04_Module
Web API Quiz Challenge


WHEN I click the start button
THEN a timer starts and I am presented with a question
    - start button with click event for starting timer and bringing user to first question
    - timer that counts down from 3 mins to 0.
    - container to hold question and multiple answers
    - 3 buttons for answer choices with click events for timer and true/false answer chosen

WHEN I answer a question
THEN I am presented with another question
    - click on button/answer choice presented with correct/incorret
    - click on button/answer moves user to next question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
    - when answer is wrong/false then 15 secs are subtracted from the timer

WHEN all questions are answered or the timer reaches 0
THEN the game is over
    - page for when timer ends or reach end of q's
    - page presents score; total number of correct/incorrect q's

WHEN the game is over
THEN I can save my initials and score
    - from to save initials and score to be saved in memory