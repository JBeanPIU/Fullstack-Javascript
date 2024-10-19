// Program: a math competition website using EJS to test yourself & compete for a high score! 
// By: Cameron Beanland 
// Date: October 18th. 2024 

const express = require('express');
const router = express.Router();

// leaderboard values
let winStreak = 0;
let leaderboards = [];

// function to generate random math question
function randomQuestion() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    let question = '';

    switch (operator) { // determines whether or not the operator is '+, -, *, or /'
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
    }
    return {
        question,
        answer: eval(question), // returns the answer
    }
}
