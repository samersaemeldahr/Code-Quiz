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
var result = document.getElementById("result");

var shuffledQuestions;
var currentQuestionIndex = 0;
var timerCount = 0;
var timerId;


var questions = [
    {
        question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        answers: ["Function", "Boolean", "Alert", "Number"],
        correctAnswer: "Function"
    },
    {
        question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        answers: ["Strings", "Arrays", "Variables", "Recorders"],
        correctAnswer: "Strings"
    },
    {
        question: "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
        answers: ["Condition", "Events", "Boolean", "All of the above"],
        correctAnswer: "Events"
    },
    {
        question: "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
        answers: ["Range", "Restriction", "Scope", "Output Level"],
        correctAnswer: "Scope"
    },
];

document.getElementById("answers").style.display = "none";

function start() {
  // event.preventDefault();
  // start timer i++,
  question.style.fontSize = "24px";
  document.getElementById("text").style.display = "none";
  hideBtn.style.display = "none";
  answers.style.display = "inherit";
  
  nextQuestion();
}; 

var time = questions.length * 20;

function nextQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    question.textContent = currentQuestion.question;
  
    // clear out any old question choices
    answers.innerHTML = "";
    currentQuestion.answers.forEach(function(choice, i) {
        // create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
    
        choiceNode.textContent = i + 1 + ". " + choice;
    
        // attach click event listener to each choice
        choiceNode.onclick = questionClick;
    
        // display on the page
        answers.appendChild(choiceNode);
      });
}



function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].correctAnswer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
      // display new time on page
      timer.textContent = time;
      result.textContent = "Incorrect!";
      result.style.color = "red";
    } else {
      result.textContent = "Correct!";
      result.style.color = "green";
    }
  
    // flash right/wrong feedback
    result.setAttribute("class", "feedback");
    setTimeout(function() {
      result.setAttribute("class", "feedback hide");
    }, 1000);
  
    // next question
    currentQuestionIndex++;
  
    // time checker
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      nextQuestion();
    }
  }

  function quizEnd() {
    // stop timer
    clearInterval(timerId);
  
    // show end screen
    //var endScreenEl = document.getElementById("end-screen");
    //endScreenEl.removeAttribute("class");
  
    // show final score
    //var finalScoreEl = document.getElementById("final-score");
    //finalScoreEl.textContent = time;
  
    // hide questions section
    questions.setAttribute("class", "hide");
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
