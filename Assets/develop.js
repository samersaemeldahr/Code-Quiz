/*

GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

*/




var startBtn = document.getElementById("start");
var hideBtn = document.getElementById("hideBtn");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var firstAnswer = document.getElementById("firstAnswer");
var secondAnswer = document.getElementById("secondAnswer");
var thirdAnswer = document.getElementById("thirdAnswer");
var fourthAnswer = document.getElementById("fourthAnswer");

var timerCount = 0;

document.getElementById("answers").style.display = "none";

function start() {
  // event.preventDefault();
  // start timer i++,
  document.getElementById("question").textContent = "In JavaScript, what is a block of code called that is used to perform a specific task?";
  document.getElementById("question").style.fontSize = "24px";
  document.getElementById("text").style.display = "none";
  document.getElementById("hideBtn").style.display = "none";
  document.getElementById("answers").style.display = "inherit";
  document.getElementById("firstAnswer").textContent = "Function";
  document.getElementById("secondAnswer").textContent = "Declaration";
  document.getElementById("thirdAnswer").textContent = "String";
  document.getElementById("fourthAnswer").textContent = "Variable";

  if (firstAnswer && secondAnswer && thirdAnswer && fourthAnswer) {
      secondquestion();
  }
};

function secondQuestion() {
    
}


/*

WHEN I answer a question
THEN I am presented with another question

var questions = [[What's JS?], [What's concat?], [What's +=?], [What does === means?]]
var answers = 

innerHTML

function answer() {
    if (answer1 || answer2 || answer3 || answer4) {
        go to function next question
    }
}

WHEN I answer a question incorrectly
THEN time is subtracted from the clock



WHEN all questions are answered or the timer reaches 0
THEN the game = over

WHEN the game = over
THEN I can save my initials and my score


*/
