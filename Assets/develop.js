var startBtn = document.getElementById("start");
var hideBtn = document.getElementById("hideBtn");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var result = document.getElementById("result");
var endScreen = document.getElementById("end");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var restartBtn = document.querySelector("#restart");
var highscoresElement = document.querySelector(".highscoresElement")
var scores = document.getElementById("scores");

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

answers.style.display = "none";
endScreen.style.display = "none";
highscoresElement.style.display = "none";

function start() {
  timerId = setInterval(clock, 1000);
  
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
    
    answers.innerHTML = "";
    currentQuestion.answers.forEach(function(answer) {
        // Add buttons to answers
        var answersBtn = document.createElement("button");
        answersBtn.setAttribute("class", "answer");
        answersBtn.setAttribute("value", answer);
    
        answersBtn.textContent = answer;
    
        answers.appendChild(answersBtn);

        // Add click to answers
        answersBtn.onclick = questionClick;
    });
}

function questionClick() {
    // Check correct answer
    if (this.value !== questions[currentQuestionIndex].correctAnswer) {
      // penalize time
      time -= 20;
  
      if (time < 0) {
        time = 0;
      }
      
      // Display time
      timer.textContent = time;

      // Display result
      result.textContent = "Incorrect!";
      result.style.color = "red";
    } else {
      result.textContent = "Correct!";
      result.style.color = "green";
    }
  
    result.setAttribute("class", "feedback");
    setTimeout(function() {
      result.setAttribute("class", "feedback hide");
    }, 1000);
  
    // Call next question
    currentQuestionIndex++;
  
    // Check time
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      nextQuestion();
    }
  }

function endQuiz() {
    // Clear timer
    clearInterval(timerId);

    // Display highscores
    highscoresElement.style.display = "block";

    // Hide questions and result sections
    question.style.display = "none";
    answers.style.display = "none";
    result.style.display = "none";
  
    // Display end screen
    endScreen.style.display = "inherit";
  
    // Display final score
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;
}

function clock() {
    // Update time
    time--;
    timer.textContent = time;
  
    // Check time
    if (time <= 0) {
       endQuiz();
    }
}

function saveHighscore() {
    // Get value of
    var initials = initialsEl.value;
  
    if (initials !== "") {
      // Get scores from local storage
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // Add score object
      var newScore = {
        score: time,
        initials: initials,
      };
  
      // Save to local storage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));

      // Display scores
      printHighscores();
    }
  }


  function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // High score up
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // Creat highscore list
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // Display highscores
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }

  function showHighscores() {
      scores.textContent = "Hide Highscores";

      if (highscoresElement.style.display === "none") {
        highscoresElement.style.display = "block";
      } else {
        highscoresElement.style.display = "none";
        scores.textContent = "View Highscores";
      }
  }
  
  // Clear highscores click
  document.getElementById("clear").onclick = clearHighscores;
  
  // Submit name
  submitBtn.onclick = saveHighscore;