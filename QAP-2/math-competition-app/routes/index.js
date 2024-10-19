/* ----- INDEX.JS MATH SETUP ----- */
const express = require('express');
const router = express.Router();

let streak = 0;
let winStreak = 0; 
let questionsAnswered = 0; // initialize questions answered counter
let leaderboards = [];

// function to generate random math question
function randomQuestion() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    let question = '';

    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            break;
        case '/':
            question = `${num1} / ${num2}`;
            break;
    }
    return {
        question,
        answer: eval(question), // evaluates answer
    };
}

/* ----- PAGE ROUTING ----- */
// home page
router.get('/home', (req, res) => {
    res.render('home', { streak: streak > 0 ? streak : "No current streak" }); 
});

// quiz page
router.get('/quiz', (req, res) => {
    const currQuestion = randomQuestion();
    res.render('quiz', { question: currQuestion.question, answer: currQuestion.answer });
});

// quiz submission
router.post('/quiz', (req, res) => {
    const userAnswer = parseFloat(req.body.answer);
    const correctAnswer = parseFloat(req.body.correctAnswer); // correct answer from hidden field

    questionsAnswered++; // total questions answered

    if (userAnswer === correctAnswer) {
        streak++; // adds on streak through hidden counter
        
        // updates winStreak if necessary
        if (streak > winStreak) {
            winStreak = streak;
        }
    } else {
        // on incorrect answer, add current streak to leaderboard if streak > 0
        if (streak > 0) {
            leaderboards.push({
                streak: streak,
                questionsAnswered: questionsAnswered, // total questions answered during this streak
            });
            leaderboards.sort((a, b) => b.streak - a.streak); // sort by streak descending
            leaderboards = leaderboards.slice(0, 10); // keep only the top 10
        }
        streak = 0; // Reset current streak
        questionsAnswered = 0; // Reset total questions answered after a loss
    }
    res.redirect('/completion'); // Redirect to completion page
});

// quiz completion page
router.get('/completion', (req, res) => {
    res.render('completion', { streak, winStreak }); // renders completion page with both current + win streak
});

// leaderboards page
router.get('/leaderboards', (req, res) => {
    res.render('leaderboards', { leaderboards });
});

module.exports = router; // exports router for use in app.js


// dev note i hate this page it has so much going on LOL
