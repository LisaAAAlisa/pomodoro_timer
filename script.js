// here I select the elements from HTML and name the variables
var startScn = document.getElementById("startscreen");
var quizScn = document.getElementById("quizscreen");
var endScn = document.getElementById("endscreen");
var startBtn = document.getElementById("start-button");
var countdown = document.getElementById("countdown");
var questionList = document.getElementById("question-list");
var question = document.getElementById("question");
var result = document.getElementById("result");
var numCorrect = 0;
var currentQuestion = 0;
var count = 30;

// Adding the event listener to begin the quiz
startBtn.addEventListener("click", startQuiz);

// Adding the function that will implement the score count and decrement according to result, adn stopping the quiz once the countdown is done or the quiz is finished
questionList.addEventListener("click", function (event) {
    var studentAnswer = event.target.textContent;
    if (studentAnswer === currentQuestionItem.a) {
        numCorrect++;
    } else {
        count -= 5;
    }
    console.log(questions.length);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        console.log(currentQuestion);
        renderNextQuestion();

    }
    else {
        stopQuiz();
    }
});


quizScn.style.display = "none";
endScn.style.display = "none";

// adding the questions and answers in an array of objects to be used for the quiz
var questions = [
    { q: "1. What is your name?", a: "King Arthur", choices: ["Sir Robin", "King Arthur", "Sir Lancelot of Camelot"] },
    { q: "2. What is your quest?", a: "I seel the Holy Grail", choices: ["I seek the Holy Grail", "To join the knights at the Round Table", "To deteat the French"] },
    { q: "3. Why do witches burn?", a: "They're made of wood", choices: ["They're made of tin", "They're made of wood", "They're made of candy"] },
    { q: "4. What floats in water?", a: "a duck!", choices: ["brains", "pretty small rocks", "a duck!"] },
    { q: "5. What...is the airspeed velocity of an unladen swallow?", a: "African or European", choices: ["African or European?", "I don't know"] }
]


var numQuestions = questions.length;
var timer;

// adding a function to start a timer and to stop quiz when count reaches zero
function startTimer() {
    timer = setInterval(function () {
        count--;
        countdown.textContent = count;
        if (count === 0) {
            stopQuiz();
        }
    }, 1000);
}
var currentQuestionItem;

// adding function that would render the next question once the previous question is answered
function renderNextQuestion() {
    questionList.innerHTML = "";
    currentQuestionItem = questions[currentQuestion];
    //console.log(currentQuestionItem);
    question.textContent = currentQuestionItem.q;
    var c = currentQuestionItem.choices;
    // Render a new li for each question
    for (var i = 0; i < c.length; i++) {
        var li = document.createElement("li");
        li.textContent = c[i];
        questionList.appendChild(li);
    }

}

// function that starts a quiz and moves from srart screen to quiz screen
function startQuiz() {
    //logic goes here
    startScn.style.display = "none";
    quizScn.style.display = "block";
    startTimer();
    renderNextQuestion();
}

// function that stops the quiz and changes the quiz screen to the end screen, adn displays resuls
function stopQuiz() {
    clearInterval(timer);
    quizScn.style.display = "none";
    endScn.style.display = "block";
    result.textContent = numCorrect + " out of " + numQuestions + " correct";
}
