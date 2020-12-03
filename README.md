# code_quiz_website
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />
    <title>Code Quiz</title>
</head>
<body>
    <div class="container">

     <div id="orginpage">
         <h2>This quiz will test how well you know coding terminology</h2>
     <button id="startbtn">Start Quiz</button>
     <button id="orginPageHighscore" onclick="showHighscore()">High Scores</button>
     
     <div id="quiz">
        <div id="timer">Time left: </div>
            <div id="questions"><p></p></div>
                <button id="a" onclick="checkAnswer('a')">A</button>
                <button id="b" onclick="checkAnswer('b')">B</button>
                <button id="c" onclick="checkAnswer('c')">C</button>
                <button id="d" onclick="checkAnswer('d')">D</button>
            <div id="result"></div>
        </div>

        <div id="gameover">

            <div id="finalScore"></div>
            <input type="text" size = "40" placeholder="Enter you initials for high score" name="intials" id="initials"/>
            <button id="submitScore">Submit Score</button>
        </div>
        
        <div id=highscoreContainer>
        
            <div id="high-scorePage">
            <div id="highscore-header">
                <h3>User Initials</h3>
                <h3>Score</h3>
            </div>
            <div id = "highscore-initials"></div>
            <div id = "highscore-score"></div>
        </div>

        <div id="endGameBtns">
            <button id="playAgain" onclick="replayQuiz()">Play Again</button>
            <button id="clearHighscore" onclick="clearScore()">Clear Highscores</button>
        </div>
    </div>
    </div>

    </div> 

    <script src="./script.js"></script>

</body>
</html>