var startButton = document.getElementById("startbtn");
var submitScoreBtn = document.getElementById("submitScore");
var endGameBtns = document.getElementById("endGameBtns");
var highscoreDisplay = document.getElementById("highscore-score")
var startQuizDiv = document.getElementById("orginpage");
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
var btnD = document.getElementById("d");

var quizQuestions = [{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},
    {
    question: "How do you check the status of a project in git?",
    choiceA: "git add",
    choiceB: "git commit",
    choiceC: "git push",
    choiceD: "git status",
    correctAnswer: "d"},
    {
    question: "What is normally used to add styling to a page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "b"},
    {
    question: "What is the purpose of an alt attribute?",
    choiceA: "to provide an alternative text for an image",
    choiceB: "to make a prettier web page",
    choiceC: "to add a link",
    choiceD: "I don't know.",
    correctAnswer: "a"},
    {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "c"},
    {
    question: "What HTML attribute refers to an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"},
];

var finalQIndex = quizQuestions.length;
var currentQIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQIndex === finalQIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};